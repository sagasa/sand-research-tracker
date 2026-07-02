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

export type DamagePart = {
  type: string;
  amount: number;
};

export type RangeModifierPoint = {
  distance: number | null;
  modifier: number;
};

export type StateNumberMap = Record<string, number>;

export type WeaponAction = {
  name: string;
  mode: string;
  intervalSeconds: number | null;
  projectileName: string;
};

export type WeaponStat = {
  textAsset: string;
  category: string;
  itemId: string;
  templateChain: string[];
  niceName: string;
  displayNameJa: string;
  rarity: string;
  iconName: string;
  iconPath: string;
  iconWidth: number | null;
  iconHeight: number | null;
  damageParts: DamagePart[];
  clipSize: number | null;
  ammoTypeIds: string[];
  rangeActions: WeaponAction[];
  reloadActions: WeaponAction[];
  spread: string;
  weaponRangeModifiers: RangeModifierPoint[];
  recoilPower: string;
  headshotMultiplier: StateNumberMap;
  magnification: StateNumberMap;
  movementSpeedModifier: StateNumberMap;
  spawnBlueprint: string;
  rewardCount: number | null;
};

export type AmmoStat = {
  textAsset: string;
  itemId: string;
  templateChain: string[];
  niceName: string;
  displayNameJa: string;
  rarity: string;
  iconName: string;
  ammoIconName: string;
  iconPath: string;
  iconWidth: number | null;
  iconHeight: number | null;
  damageParts: DamagePart[];
  rangeModifiers: RangeModifierPoint[];
  customProjectile: string;
  raytraceSpread: string;
  stackSmall: number | null;
  stackMedium: number | null;
  stackLarge: number | null;
  rewardCount: number | null;
  spawnBlueprint: string;
};

export type ShotgunPelletStat = {
  weaponId: string;
  weaponName: string;
  weaponSource: string;
  action: string;
  actionSource: string;
  actionTargetData: number | null;
  actionSpreadCount: number | null;
  mode: string;
  ammoId: string;
  ammoName: string;
  ammoSource: string;
  ammoSpreadOverrideCount: number | null;
  effectivePelletCount: number | null;
  damagePerPelletParts: DamagePart[];
  allPelletsDamageParts: DamagePart[];
  projectile: string;
  ammoCustomProjectile: string;
};

export type ProjectileStat = {
  textAsset: string;
  projectileName: string;
  projectileType: string;
  velocity: number | null;
  weight: number | null;
  gravity: number | null;
  drag: number | null;
  radiusStart: number | null;
  radiusEnd: number | null;
  autoDestroy: number | null;
  ricochetAngle: number | null;
  ricochetCount: number | null;
  penetrationAngle: number | null;
  penetrationCount: number | null;
  newProjectileOnPenetration: string;
  newAmmoOnPenetration: string;
};

export type ArmorStat = {
  kind: string;
  textAsset: string;
  entryName: string;
  templateChain: string[];
  healthValue: number | null;
  healthCount: number | null;
  damageMasks: string[];
  regenDelay: number | null;
  regenSpeed: number | null;
  initialItems: string[];
};

export type EquipmentStatsSource = {
  generatedAt: string;
  sourceFiles: string[];
  notes: string[];
};
