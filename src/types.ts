export type MaterialRequirement = {
  name: string;
  count: number;
};

export type TechBranch = {
  name: string;
  slug: string;
  color: string;
  summary: string;
  order: number;
};

export type TechNode = {
  id: string;
  name: string;
  branch: string;
  branchSlug: string;
  branchOrder: number;
  branchColor: string;
  tier: number;
  tierLabel: string;
  tierCostRange: string;
  category: string;
  crowns: number;
  materials: MaterialRequirement[];
  sourceUrl: string;
};

export type TrackerState = {
  targetNodeIds: string[];
  unlockedNodeIds: string[];
  inventory: Record<string, number>;
  hideUnlocked: boolean;
  search: string;
  branch: string;
  tier: number | "all";
};

export type MaterialSummary = {
  name: string;
  required: number;
  owned: number;
  remaining: number;
  nodeIds: string[];
};
