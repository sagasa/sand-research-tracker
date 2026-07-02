import * as cheerio from "cheerio";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const SOURCE_URL = "https://sandraidersofsophie.com/database";
const OUT_FILE = resolve("src/generated/techTreeData.ts");

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
  const response = await fetch(SOURCE_URL, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${SOURCE_URL}: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);
  const nodes = [];
  const branchOrder = new Map();

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

            nodes.push({
              id,
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
              sourceUrl: link ? new URL(link, SOURCE_URL).href : SOURCE_URL,
            });
          });
      });
  });

  if (nodes.length < 80) {
    throw new Error(`Unexpectedly low node count: ${nodes.length}`);
  }

  const branches = Object.entries(BRANCH_META).map(([name, meta]) => ({
    name,
    slug: meta.slug,
    color: meta.color,
    summary: meta.summary,
    order: branchOrder.get(name) ?? 999,
  }));

  const generatedAt = new Date().toISOString();
  const content = `import type { TechBranch, TechNode } from "../types";\n\n`
    + `export const techTreeSource = ${JSON.stringify({ sourceUrl: SOURCE_URL, generatedAt }, null, 2)} as const;\n\n`
    + `export const techBranches: TechBranch[] = ${JSON.stringify(branches, null, 2)};\n\n`
    + `export const techNodes: TechNode[] = ${JSON.stringify(nodes, null, 2)};\n`;

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, content, "utf8");
  console.log(`Generated ${nodes.length} nodes -> ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
