import * as cheerio from "cheerio";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const SOURCE_URL = "https://sandraidersofsophie.com/database";
const SAND_GAME_DB_RESEARCH_URL = "https://sandgamedb.com/tools/research-checklist";
const COG_AND_CROWN_TECH_URL = "https://cogandcrown.com/tech/";
const OUT_FILE = resolve("src/generated/techTreeData.ts");
const PROGRESSION_DESCRIPTIONS_FILE = process.env.SAND_PROGRESSION_DESCRIPTIONS_JSON
  ? resolve(process.env.SAND_PROGRESSION_DESCRIPTIONS_JSON)
  : null;
const RESEARCH_TREE_FILE = process.env.SAND_RESEARCH_TREE_JSON
  ? resolve(process.env.SAND_RESEARCH_TREE_JSON)
  : null;

const BRANCH_META = {
  "Godlewski's Expedition": {
    slug: "godlewski",
    color: "#5fb3ff",
    summary: "構造、推進、エンジン、クルー、ユーティリティ系",
  },
  "Kaiser's Friends": {
    slug: "kaiser",
    color: "#ffb15f",
    summary: "デッキ、貨物、砲塔、ストレージ系",
  },
  "K.K. Landwehr": {
    slug: "landwehr",
    color: "#78d389",
    summary: "装甲、操舵、武装、アーティラリー系",
  },
};

function compact(value) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeThousands(value) {
  let out = value;
  for (;;) {
    const next = out.replace(/(\d),\s+(\d{3})(\D|$)/g, "$1,$2$3");
    if (next === out) return out;
    out = next;
  }
}

function parseCrowns(value) {
  const parsed = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function romanTier(tier) {
  return ["", "I", "II", "III", "IV"][tier] ?? String(tier);
}

function normalizeTierWords(value) {
  return value
    .replace(/\btier\s*i\b/gi, "t1")
    .replace(/\btier\s*ii\b/gi, "t2")
    .replace(/\btier\s*iii\b/gi, "t3")
    .replace(/\btier\s*iv\b/gi, "t4")
    .replace(/\btier\s*([1-4])\b/gi, "t$1");
}

function researchNameKey(value) {
  return normalizeTierWords(value).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function publicResearchNameKey(value) {
  return value
    .replace(/\([^)]*\)/g, " ")
    .replace(/\b(?:tier|t)?\s*(?:i|ii|iii|iv|[1-4])\b/gi, " ")
    .replace(/\b(?:variant|multiple|alt\.?price)\b/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function uniqueStrings(values) {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.filter((value) => typeof value === "string" && value.length > 0))];
}

function getField(object, names) {
  if (!object || typeof object !== "object") return undefined;
  for (const name of names) {
    if (name in object) return object[name];
  }
  return undefined;
}

async function readJsonIfExists(file, { required = false } = {}) {
  if (!file) return null;
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (!required && error?.code === "ENOENT") return null;
    throw error;
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function extractSandGameDbResearchNodesFromScript(script) {
  const normalizedScript = script.replace(/\0/g, "");
  const markerIndex = normalizedScript.indexOf('"tierSlot"');
  if (markerIndex < 0) {
    throw new Error("sandgamedb catalog asset did not contain research tierSlot data.");
  }

  const parseStart = normalizedScript.lastIndexOf("JSON.parse(`", markerIndex);
  if (parseStart < 0) {
    throw new Error("sandgamedb catalog asset did not expose research data as JSON.parse.");
  }

  const jsonStart = parseStart + "JSON.parse(`".length;
  const jsonEnd = normalizedScript.indexOf("`)", jsonStart);
  if (jsonEnd < 0) {
    throw new Error("sandgamedb research JSON literal was not terminated.");
  }

  const nodes = JSON.parse(normalizedScript.slice(jsonStart, jsonEnd));
  if (!Array.isArray(nodes) || nodes.length === 0) {
    throw new Error("sandgamedb research JSON did not contain any nodes.");
  }

  return nodes;
}

async function fetchSandGameDbResearchNodes() {
  const html = await fetchText(SAND_GAME_DB_RESEARCH_URL);
  const assetPath = html.match(/\/assets\/catalog-world-[^"]+\.js/)?.[0];
  if (!assetPath) {
    throw new Error("sandgamedb research checklist did not reference catalog-world asset.");
  }

  const assetUrl = new URL(assetPath, SAND_GAME_DB_RESEARCH_URL).href;
  const script = await fetchText(assetUrl);
  return {
    sourceUrl: SAND_GAME_DB_RESEARCH_URL,
    assetUrl,
    nodes: extractSandGameDbResearchNodesFromScript(script),
  };
}

function decodeAstroPropValue(value) {
  if (Array.isArray(value) && value.length === 2 && typeof value[0] === "number") {
    const [tag, payload] = value;
    if (tag === 0) return decodeAstroPropValue(payload);
    if (tag === 1) return Array.isArray(payload) ? payload.map(decodeAstroPropValue) : [];
    return decodeAstroPropValue(payload);
  }

  if (Array.isArray(value)) return value.map(decodeAstroPropValue);

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, decodeAstroPropValue(nested)]),
    );
  }

  return value;
}

function cleanCogAndCrownDisplayName(value) {
  return compact(
    String(value ?? "")
      .replace(/^\s*[IVX]+\([a-z]\)\.\s*/i, "")
      .replace(/^\(Shop\)\s*/i, ""),
  );
}

function cogAndCrownSlot(value) {
  return String(value ?? "").match(/^[IVX]+\(([a-z])\)\./i)?.[1]?.toLowerCase() ?? null;
}

function extractCogAndCrownTechTree(html) {
  const $ = cheerio.load(html);
  const propsRaw = $("astro-island[component-url*='TechTree']").attr("props");
  if (!propsRaw) {
    throw new Error("Cog & Crown tech page did not expose TechTree props.");
  }

  const props = decodeAstroPropValue(JSON.parse(propsRaw));
  const nodesByFaction = props?.nodesByFaction;
  if (!nodesByFaction || typeof nodesByFaction !== "object") {
    throw new Error("Cog & Crown TechTree props did not contain nodesByFaction.");
  }

  const nodes = [];
  for (const [fallbackBranchSlug, factionNodes] of Object.entries(nodesByFaction)) {
    if (!Array.isArray(factionNodes)) continue;

    for (const sourceNode of factionNodes) {
      const id = sourceNode?.id;
      const displayName = sourceNode?.displayName;
      const tier = Number(sourceNode?.tier);
      if (typeof id !== "string" || typeof displayName !== "string" || !Number.isFinite(tier)) {
        continue;
      }

      nodes.push({
        id,
        branchSlug:
          typeof sourceNode.factionId === "string" && sourceNode.factionId
            ? sourceNode.factionId
            : fallbackBranchSlug,
        tier,
        displayName,
        name: cleanCogAndCrownDisplayName(displayName),
        treeSlot: cogAndCrownSlot(displayName),
        col: Number.isFinite(Number(sourceNode.col)) ? Number(sourceNode.col) : null,
        row: Number.isFinite(Number(sourceNode.row)) ? Number(sourceNode.row) : null,
        prerequisites: uniqueStrings(sourceNode.prerequisites),
      });
    }
  }

  if (nodes.length < 80) {
    throw new Error(`Unexpectedly low Cog & Crown node count: ${nodes.length}`);
  }

  return nodes;
}

async function fetchCogAndCrownTechTree() {
  const html = await fetchText(COG_AND_CROWN_TECH_URL);
  return {
    sourceUrl: COG_AND_CROWN_TECH_URL,
    nodes: extractCogAndCrownTechTree(html),
  };
}

function extractProgressionDescriptions(value) {
  const database = value?.database ?? value?.Database ?? value;
  if (!database || typeof database !== "object") return [];

  return Object.entries(database)
    .map(([guid, entry]) => ({
      guid,
      name: typeof entry?.name === "string" ? entry.name : typeof entry?.Name === "string" ? entry.Name : "",
      uiPriority: Number.isFinite(Number(entry?.uiPriority ?? entry?.UiPriority))
        ? Number(entry?.uiPriority ?? entry?.UiPriority)
        : null,
    }))
    .filter((entry) => entry.guid && entry.name);
}

function buildProgressionDescriptionIndex(descriptions) {
  const index = new Map();
  for (const description of descriptions) {
    const key = researchNameKey(description.name);
    if (!key) continue;
    const entries = index.get(key) ?? [];
    entries.push(description);
    index.set(key, entries);
  }
  return index;
}

function findProgressionDescription(node, descriptionIndex) {
  const tierRoman = romanTier(node.tier);
  const candidates = [
    `${node.name} T${node.tier}`,
    `${node.name} Tier ${node.tier}`,
    `${node.name} Tier ${tierRoman}`,
    `${node.name} ${node.tierLabel}`,
    node.name,
  ].map(researchNameKey);

  for (const candidate of candidates) {
    const matches = descriptionIndex.get(candidate) ?? [];
    if (matches.length === 1) return matches[0];
  }

  return null;
}

function unwrapResearchTree(value) {
  if (!value || typeof value !== "object") return null;
  const result = value.Result ?? value.result ?? value.Data ?? value.data ?? value;
  if (result?.Roots || result?.roots || result?.Nodes || result?.nodes) return result;
  const nested = result?.ResearchTree ?? result?.researchTree;
  return nested && typeof nested === "object" ? nested : null;
}

function extractResearchTree(value) {
  const tree = unwrapResearchTree(value);
  const rawNodes = getField(tree, ["Nodes", "nodes"]);
  if (!Array.isArray(rawNodes)) return null;

  const roots = uniqueStrings(getField(tree, ["Roots", "roots"]));
  const nodes = rawNodes
    .map((node) => {
      const id = getField(node, ["Id", "id"]);
      if (typeof id !== "string" || !id) return null;
      return {
        id,
        tier: Number(getField(node, ["Tier", "tier"])),
        fraction: getField(node, ["Fraction", "fraction"]),
        compartmentDefinitionIds: uniqueStrings(
          getField(node, ["CompartmentDefinitionIds", "compartmentDefinitionIds"]),
        ),
        shopItems: Array.isArray(getField(node, ["ShopItems", "shopItems"]))
          ? getField(node, ["ShopItems", "shopItems"])
          : [],
        researchPrice: Array.isArray(getField(node, ["ResearchPrice", "researchPrice"]))
          ? getField(node, ["ResearchPrice", "researchPrice"])
          : [],
        requiredIds: uniqueStrings(
          getField(node, ["RequiredNodesIds", "requiredNodesIds", "RequiredNodes", "requiredNodes"]),
        ),
        dependentIds: uniqueStrings(
          getField(node, ["DependentNodesIds", "dependentNodesIds", "DependentNodes", "dependentNodes"]),
        ),
      };
    })
    .filter(Boolean);

  return {
    roots,
    nodesById: new Map(nodes.map((node) => [node.id, node])),
    nodeCount: nodes.length,
  };
}

function branchNameForFraction(fraction) {
  if (fraction === "Science" || fraction === 0) return "Godlewski's Expedition";
  if (fraction === "Military" || fraction === 1) return "K.K. Landwehr";
  if (fraction === "Smuggling" || fraction === 2) return "Kaiser's Friends";
  return "Unknown";
}

function priceItemDefinition(price) {
  const value = getField(price, ["ItemDefinition", "itemDefinition"]);
  return typeof value === "string" ? value : "";
}

function priceAmount(price) {
  const value = Number(getField(price, ["Amount", "amount"]));
  return Number.isFinite(value) ? value : 0;
}

function isCrownDefinition(definition) {
  return /crown/i.test(definition);
}

function parseResearchMaterials(prices) {
  return prices
    .map((price) => ({
      name: priceItemDefinition(price),
      count: priceAmount(price),
    }))
    .filter((material) => material.name && material.count > 0 && !isCrownDefinition(material.name));
}

function parseResearchCrowns(prices) {
  return prices
    .filter((price) => isCrownDefinition(priceItemDefinition(price)))
    .reduce((sum, price) => sum + priceAmount(price), 0);
}

function buildBranches(branchOrder, nodes) {
  const defaultOrder = new Map(Object.keys(BRANCH_META).map((name, index) => [name, index + 1]));
  const branchNames = new Set([...Object.keys(BRANCH_META), ...nodes.map((node) => node.branch)]);

  return [...branchNames]
    .map((name) => {
      const meta = BRANCH_META[name] ?? {
        slug: slugify(name),
        color: "#9aa4ad",
        summary: "",
      };
      return {
        name,
        slug: meta.slug,
        color: meta.color,
        summary: meta.summary,
        order: branchOrder.get(name) ?? defaultOrder.get(name) ?? 999,
      };
    })
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

function buildNodesFromResearchTree(researchTree, progressionDescriptions) {
  const descriptionsByGuid = new Map(progressionDescriptions.map((entry) => [entry.guid, entry]));
  const branchOrder = new Map();
  const defaultOrder = new Map(Object.keys(BRANCH_META).map((name, index) => [name, index + 1]));

  const nodes = [...researchTree.nodesById.values()].map((treeNode, nodeIndex) => {
    const description = descriptionsByGuid.get(treeNode.id);
    const branchName = branchNameForFraction(treeNode.fraction);
    const branchMeta = BRANCH_META[branchName] ?? {
      slug: slugify(branchName),
      color: "#9aa4ad",
      summary: "",
    };
    if (!branchOrder.has(branchName)) {
      branchOrder.set(branchName, defaultOrder.get(branchName) ?? branchOrder.size + 1);
    }

    const tier = Number.isFinite(treeNode.tier) && treeNode.tier > 0 ? treeNode.tier : 0;
    const tierLabel = tier > 0 ? `Tier ${romanTier(tier)}` : "Tier ?";
    const hasShopItems = treeNode.shopItems.length > 0;
    const hasCompartments = treeNode.compartmentDefinitionIds.length > 0;

    return {
      id: treeNode.id,
      guid: treeNode.id,
      name: description?.name ?? treeNode.id,
      branch: branchName,
      branchSlug: branchMeta.slug,
      branchOrder: branchOrder.get(branchName) ?? 999,
      branchColor: branchMeta.color,
      tier,
      tierLabel,
      tierCostRange: "",
      category: hasShopItems ? "Shop" : hasCompartments ? "Compartment" : "Research",
      crowns: parseResearchCrowns(treeNode.researchPrice),
      materials: parseResearchMaterials(treeNode.researchPrice),
      requiredNodeIds: treeNode.requiredIds,
      dependentNodeIds: treeNode.dependentIds,
      isRoot: researchTree.roots.includes(treeNode.id),
      treeColumn: tier > 0 ? tier : null,
      treeSlot: description?.uiPriority ?? nodeIndex,
      sourceUrl: "local ResearchTreeJsonDto JSON",
    };
  });

  return { nodes, branchOrder };
}

function buildSandGameDbIndex(sandGameDbNodes) {
  const index = new Map();
  for (const [order, node] of sandGameDbNodes.entries()) {
    const key = `${node.tier}:${publicResearchNameKey(node.displayName ?? node.name ?? node.slug)}`;
    const bucket = index.get(key) ?? [];
    bucket.push({ ...node, order });
    index.set(key, bucket);
  }
  return index;
}

function takeSandGameDbNode(publicNode, sandGameDbIndex, usedSandGameDbIds) {
  const key = `${publicNode.tier}:${publicResearchNameKey(publicNode.name)}`;
  const candidates = sandGameDbIndex.get(key) ?? [];
  const unused = candidates.find((candidate) => !usedSandGameDbIds.has(candidate.id));
  if (!unused) return null;
  usedSandGameDbIds.add(unused.id);
  return unused;
}

function cogAndCrownExactKey(branchSlug, tier, name, treeSlot) {
  return `${branchSlug}|${tier}|${String(treeSlot ?? "").toLowerCase()}|${publicResearchNameKey(name)}`;
}

function cogAndCrownLooseKey(branchSlug, tier, name) {
  return `${branchSlug}|${tier}|${publicResearchNameKey(name)}`;
}

function addToBucket(map, key, value) {
  const bucket = map.get(key) ?? [];
  bucket.push(value);
  map.set(key, bucket);
}

function buildCogAndCrownNodeMapping(nodes, cogAndCrownNodes) {
  const appByExactKey = new Map();
  const appByLooseKey = new Map();
  for (const node of nodes) {
    addToBucket(
      appByExactKey,
      cogAndCrownExactKey(node.branchSlug, node.tier, node.name, node.treeSlot),
      node,
    );
    addToBucket(appByLooseKey, cogAndCrownLooseKey(node.branchSlug, node.tier, node.name), node);
  }

  const cogToApp = new Map();
  const usedNodeIds = new Set();
  const assign = (cogNode, appNode) => {
    cogToApp.set(cogNode.id, appNode);
    usedNodeIds.add(appNode.id);
  };

  for (const cogNode of cogAndCrownNodes) {
    const exactKey = cogAndCrownExactKey(
      cogNode.branchSlug,
      cogNode.tier,
      cogNode.name,
      cogNode.treeSlot,
    );
    const appNode = (appByExactKey.get(exactKey) ?? []).find((candidate) => !usedNodeIds.has(candidate.id));
    if (appNode) assign(cogNode, appNode);
  }

  for (const cogNode of cogAndCrownNodes) {
    if (cogToApp.has(cogNode.id)) continue;

    const looseKey = cogAndCrownLooseKey(cogNode.branchSlug, cogNode.tier, cogNode.name);
    const unusedCandidates = (appByLooseKey.get(looseKey) ?? []).filter(
      (candidate) => !usedNodeIds.has(candidate.id),
    );
    if (unusedCandidates.length === 1) {
      assign(cogNode, unusedCandidates[0]);
    }
  }

  return cogToApp;
}

function applyCogAndCrownDependencies(nodes, cogAndCrownNodes) {
  const cogToApp = buildCogAndCrownNodeMapping(nodes, cogAndCrownNodes);
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const cogNodesById = new Map(cogAndCrownNodes.map((node) => [node.id, node]));
  const totalEdges = cogAndCrownNodes.reduce(
    (sum, node) => sum + (Array.isArray(node.prerequisites) ? node.prerequisites.length : 0),
    0,
  );
  let matchedEdges = 0;

  for (const node of nodes) {
    node.requiredNodeIds = [];
    node.dependentNodeIds = [];
    node.isRoot = false;
  }

  for (const cogNode of cogAndCrownNodes) {
    const appNode = cogToApp.get(cogNode.id);
    if (!appNode) continue;

    const requiredIds = [];
    for (const prerequisiteId of cogNode.prerequisites) {
      const prerequisiteNode = cogNodesById.get(prerequisiteId);
      const appPrerequisite = prerequisiteNode ? cogToApp.get(prerequisiteNode.id) : null;
      if (!appPrerequisite) continue;

      matchedEdges += 1;
      requiredIds.push(appPrerequisite.id);
    }

    appNode.requiredNodeIds = uniqueStrings(requiredIds);
    appNode.isRoot = appNode.requiredNodeIds.length === 0;
    appNode.cogAndCrownId = cogNode.id;
    appNode.sourceUrls = uniqueStrings([
      ...(appNode.sourceUrls ?? []),
      COG_AND_CROWN_TECH_URL,
      appNode.sourceUrl,
    ]);
  }

  for (const node of nodes) {
    for (const requiredId of node.requiredNodeIds ?? []) {
      const requiredNode = nodesById.get(requiredId);
      if (!requiredNode) continue;
      requiredNode.dependentNodeIds = uniqueStrings([...(requiredNode.dependentNodeIds ?? []), node.id]);
    }
  }

  return {
    sourceNodeCount: cogAndCrownNodes.length,
    matchedNodes: cogToApp.size,
    totalEdges,
    matchedEdges,
  };
}

async function writeGeneratedOutput({ nodes, branches, sourceInfo }) {
  const content = `import type { TechBranch, TechNode } from "../types";\n\n`
    + `export const techTreeSource = ${JSON.stringify(sourceInfo, null, 2)} as const;\n\n`
    + `export const techBranches: TechBranch[] = ${JSON.stringify(branches, null, 2)};\n\n`
    + `export const techNodes: TechNode[] = ${JSON.stringify(nodes, null, 2)};\n`;

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, content, "utf8");
}

function parseMaterials($, node) {
  const result = [];
  let pendingThousandsPrefix = "";

  $(node)
    .find(".db-node-materials .db-material-part")
    .each((_, part) => {
      const raw = normalizeThousands(compact($(part).text()).replace(/^,\s*/, ""));
      if (!raw) return;
      const linkedName = compact($(part).find("a").first().text());
      if (!linkedName) {
        const prefixMatch = raw.match(/^([\d,]+)$/);
        if (prefixMatch) {
          pendingThousandsPrefix = prefixMatch[1].replace(/,/g, "");
          return;
        }
        const fallbackMatch = raw.match(/^([\d,]+)\s+(.+)$/);
        if (!fallbackMatch) return;
        const countToken = pendingThousandsPrefix
          ? `${pendingThousandsPrefix},${fallbackMatch[1].replace(/,/g, "").padStart(3, "0")}`
          : fallbackMatch[1];
        pendingThousandsPrefix = "";
        const count = Number.parseInt(countToken.replace(/,/g, ""), 10);
        const name = compact(fallbackMatch[2]);
        if (!Number.isFinite(count) || count <= 0 || !name) return;
        result.push({ name, count, raw });
        return;
      }

      const match = raw.match(/^([\d,]+)\s+/);
      if (!match) return;
      const countToken = pendingThousandsPrefix
        ? `${pendingThousandsPrefix},${match[1].replace(/,/g, "").padStart(3, "0")}`
        : match[1];
      pendingThousandsPrefix = "";
      const count = Number.parseInt(countToken.replace(/,/g, ""), 10);
      if (!Number.isFinite(count) || count <= 0) return;

      result.push({
        name: linkedName,
        count,
        raw,
      });
    });
  return result;
}

async function main() {
  const progressionDescriptions = extractProgressionDescriptions(
    await readJsonIfExists(PROGRESSION_DESCRIPTIONS_FILE),
  );
  const progressionDescriptionIndex = buildProgressionDescriptionIndex(progressionDescriptions);
  const sandGameDbResearch = await fetchSandGameDbResearchNodes();
  const researchTree = extractResearchTree(
    await readJsonIfExists(RESEARCH_TREE_FILE, { required: Boolean(RESEARCH_TREE_FILE) }),
  );

  if (researchTree) {
    const { nodes, branchOrder } = buildNodesFromResearchTree(researchTree, progressionDescriptions);
    if (nodes.length === 0) {
      throw new Error("Research tree dependency file did not contain any nodes.");
    }

    const generatedAt = new Date().toISOString();
    const sourceInfo = {
      sourceUrl: "local ResearchTreeJsonDto JSON",
      generatedAt,
      progressionDescriptionsFile: progressionDescriptions.length > 0 ? "local progression_tree_descriptions.json" : null,
      progressionDescriptionCount: progressionDescriptions.length,
      progressionMatchedNodes: nodes.filter((node) => node.name !== node.id).length,
      sandGameDbResearchUrl: sandGameDbResearch.sourceUrl,
      sandGameDbResearchNodeCount: sandGameDbResearch.nodes.length,
      sandGameDbMatchedNodes: 0,
      hasProgressionLayout: false,
      researchTreeFile: "local ResearchTreeJsonDto JSON",
      researchTreeNodeCount: researchTree.nodeCount,
      dependencyMatchedNodes: nodes.length,
      hasExplicitDependencies: true,
    };
    await writeGeneratedOutput({
      nodes,
      branches: buildBranches(branchOrder, nodes),
      sourceInfo,
    });
    console.log(`Generated ${nodes.length} research-tree nodes -> ${OUT_FILE}`);
    console.log(`Progression descriptions matched: ${sourceInfo.progressionMatchedNodes}/${progressionDescriptions.length}`);
    console.log(`Research tree dependencies matched: ${nodes.length}/${researchTree.nodeCount}`);
    return;
  }

  const cogAndCrownTechTree = await fetchCogAndCrownTechTree();
  const html = await fetchText(SOURCE_URL);
  const $ = cheerio.load(html);
  const nodes = [];
  const branchOrder = new Map();
  let progressionMatchedNodes = 0;

  $(".db-branch").each((branchIndex, branch) => {
    const branchName = compact($(branch).find("h3").first().text());
    if (!branchName) return;
    branchOrder.set(branchName, branchIndex + 1);

    $(branch)
      .find(".db-tier-row")
      .each((_, tierRow) => {
        const tier = Number.parseInt($(tierRow).attr("data-tier") ?? "", 10);
        const tierLabel = compact($(tierRow).find(".db-tier-label span").first().text()) || `Tier ${tier}`;
        const tierCostRange = compact($(tierRow).find(".db-tier-label small").first().text());

        $(tierRow)
          .find("article.db-node")
          .each((nodeIndex, node) => {
            const name = compact($(node).find("h4").first().text());
            if (!name) return;

            const category = compact($(node).find(".db-node-tag").first().text());
            const crowns = parseCrowns(compact($(node).find(".db-node-cost").first().text()));
            const link = $(node).find("h4 a[href]").first().attr("href") ?? "";
            const branchMeta = BRANCH_META[branchName] ?? {
              slug: slugify(branchName),
              color: "#9aa4ad",
              summary: "",
            };
            const materials = parseMaterials($, node);
            const id = `${branchMeta.slug}-t${tier}-${String(nodeIndex + 1).padStart(2, "0")}-${slugify(name)}`;
            const progressionDescription = findProgressionDescription(
              { name, tier, tierLabel },
              progressionDescriptionIndex,
            );
            if (progressionDescription) progressionMatchedNodes += 1;

            nodes.push({
              id,
              guid: progressionDescription?.guid,
              name,
              branch: branchName,
              branchSlug: branchMeta.slug,
              branchOrder: branchIndex + 1,
              branchColor: branchMeta.color,
              tier,
              tierLabel,
              tierCostRange,
              category,
              crowns,
              materials: materials.map(({ name, count }) => ({ name, count })),
              requiredNodeIds: [],
              dependentNodeIds: [],
              isRoot: false,
              isShop: false,
              uiPriority: progressionDescription?.uiPriority ?? null,
              treeColumn: null,
              treeSlot: progressionDescription?.uiPriority ?? null,
              treeOrder: null,
              sandGameDbSlug: undefined,
              sandGameDbDisplayName: undefined,
              sourceUrls: [SOURCE_URL, link ? new URL(link, SOURCE_URL).href : SOURCE_URL],
              sourceUrl: link ? new URL(link, SOURCE_URL).href : SOURCE_URL,
            });
          });
      });
  });

  if (nodes.length < 80) {
    throw new Error(`Unexpectedly low node count: ${nodes.length}`);
  }

  const sandGameDbIndex = buildSandGameDbIndex(sandGameDbResearch.nodes);
  const usedSandGameDbIds = new Set();
  let sandGameDbMatchedNodes = 0;
  for (const node of nodes) {
    const sandGameDbNode = takeSandGameDbNode(node, sandGameDbIndex, usedSandGameDbIds);
    if (!sandGameDbNode) continue;

    sandGameDbMatchedNodes += 1;
    node.id = sandGameDbNode.id;
    node.guid = sandGameDbNode.id;
    node.isShop = Boolean(sandGameDbNode.isShop);
    node.uiPriority =
      Number.isFinite(Number(sandGameDbNode.uiPriority)) ? Number(sandGameDbNode.uiPriority) : null;
    node.treeColumn = Number.isFinite(Number(sandGameDbNode.tier)) ? Number(sandGameDbNode.tier) : node.tier;
    node.treeSlot = sandGameDbNode.tierSlot ?? null;
    node.treeOrder = sandGameDbNode.order;
    node.sandGameDbSlug = sandGameDbNode.slug;
    node.sandGameDbDisplayName = sandGameDbNode.displayName;
    node.sourceUrls = [SOURCE_URL, SAND_GAME_DB_RESEARCH_URL, node.sourceUrl];
  }

  const cogAndCrownDependencies = applyCogAndCrownDependencies(nodes, cogAndCrownTechTree.nodes);
  const dependencyMatchedNodes = cogAndCrownDependencies.matchedNodes;

  const branches = buildBranches(branchOrder, nodes);

  const generatedAt = new Date().toISOString();
  const sourceInfo = {
    sourceUrl: SOURCE_URL,
    generatedAt,
    progressionDescriptionsFile: progressionDescriptions.length > 0 ? "local progression_tree_descriptions.json" : null,
    progressionDescriptionCount: progressionDescriptions.length,
    progressionMatchedNodes,
    sandGameDbResearchUrl: sandGameDbResearch.sourceUrl,
    sandGameDbResearchNodeCount: sandGameDbResearch.nodes.length,
    sandGameDbMatchedNodes,
    cogAndCrownTechUrl: cogAndCrownTechTree.sourceUrl,
    cogAndCrownNodeCount: cogAndCrownDependencies.sourceNodeCount,
    cogAndCrownMatchedNodes: cogAndCrownDependencies.matchedNodes,
    cogAndCrownDependencyEdges: cogAndCrownDependencies.totalEdges,
    cogAndCrownMatchedDependencyEdges: cogAndCrownDependencies.matchedEdges,
    hasProgressionLayout: sandGameDbMatchedNodes > 0,
    researchTreeFile: researchTree ? "local ResearchTreeJsonDto JSON" : null,
    researchTreeNodeCount: researchTree?.nodeCount ?? 0,
    dependencyMatchedNodes,
    dependencyMatchedEdges: cogAndCrownDependencies.matchedEdges,
    hasExplicitDependencies: cogAndCrownDependencies.matchedEdges > 0,
  };
  await writeGeneratedOutput({ nodes, branches, sourceInfo });
  console.log(`Generated ${nodes.length} nodes -> ${OUT_FILE}`);
  console.log(`sandgamedb research nodes matched: ${sandGameDbMatchedNodes}/${sandGameDbResearch.nodes.length}`);
  console.log(
    `Cog & Crown dependencies matched: ${cogAndCrownDependencies.matchedEdges}/${cogAndCrownDependencies.totalEdges} edges across ${cogAndCrownDependencies.matchedNodes}/${cogAndCrownDependencies.sourceNodeCount} nodes`,
  );
  console.log(`Local progression descriptions matched: ${progressionMatchedNodes}/${progressionDescriptions.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
