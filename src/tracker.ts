import type { MaterialSummary, TechNode, TrackerState } from "./types";

export const defaultTrackerState: TrackerState = {
  targetNodeIds: [],
  unlockedNodeIds: [],
  inventory: {},
  hideUnlocked: true,
  search: "",
  branch: "all",
  tier: "all",
};

function uniqueStrings(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.filter((value): value is string => typeof value === "string"))];
}

export function normalizeTrackerState(value: Partial<TrackerState>): TrackerState {
  const inventory: Record<string, number> = {};
  if (value.inventory && typeof value.inventory === "object" && !Array.isArray(value.inventory)) {
    for (const [name, count] of Object.entries(value.inventory)) {
      const parsed = Number(count);
      if (Number.isFinite(parsed) && parsed >= 0) {
        inventory[name] = parsed;
      }
    }
  }

  return {
    ...defaultTrackerState,
    ...value,
    targetNodeIds: uniqueStrings(value.targetNodeIds),
    unlockedNodeIds: uniqueStrings(value.unlockedNodeIds),
    inventory,
    tier:
      value.tier === "all" || typeof value.tier === "number"
        ? value.tier
        : defaultTrackerState.tier,
    branch: typeof value.branch === "string" ? value.branch : defaultTrackerState.branch,
    search: typeof value.search === "string" ? value.search : defaultTrackerState.search,
    hideUnlocked: typeof value.hideUnlocked === "boolean" ? value.hideUnlocked : true,
  };
}

export function computeMaterialSummaries(
  nodes: TechNode[],
  targetNodeIds: string[],
  inventory: Record<string, number>,
): MaterialSummary[] {
  const targetIdSet = new Set(targetNodeIds);
  const summaries = new Map<string, MaterialSummary>();

  for (const node of nodes) {
    if (!targetIdSet.has(node.id)) continue;
    for (const material of node.materials) {
      const existing =
        summaries.get(material.name) ??
        {
          name: material.name,
          required: 0,
          owned: inventory[material.name] ?? 0,
          remaining: 0,
          nodeIds: [],
        };
      existing.required += material.count;
      existing.remaining = Math.max(existing.required - existing.owned, 0);
      existing.nodeIds.push(node.id);
      summaries.set(material.name, existing);
    }
  }

  return [...summaries.values()].sort((a, b) => {
    if (b.remaining !== a.remaining) return b.remaining - a.remaining;
    if (b.required !== a.required) return b.required - a.required;
    return a.name.localeCompare(b.name);
  });
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
