import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const SOURCE_DIR = resolve("../sand_static_analysis/out");
const OUT_FILE = resolve("src/generated/equipmentStatsData.ts");

const SOURCE_FILES = {
  weapons: "infantry_weapon_summary.tsv",
  ammo: "infantry_ammo_summary.tsv",
  projectiles: "infantry_projectile_summary.tsv",
  armor: "player_armor_summary.tsv",
  icons: "infantry_weapon_icon_manifest.tsv",
  itemGui: "item_gui_manifest.tsv",
  shotgunPellets: "shotgun_pellet_summary.tsv",
};

const JA_NAME_OVERRIDES = {
  DevSiegeRevolver: 'O\'Donnel "Blitz" セミオートピストル',
  DevSiegeRevolverAmmo: "8x21mm弾",
  IncendiaryPistolAmmo: "8x21mm焼夷弾",
  LowQualityPistolAmmo: "8x21mm低品質弾",
  item_antiReactorGun: "対リアクター銃",
  item_antiReactorGunAmmo: "対リアクター弾",
  item_orbitalStrikeGun: "軌道攻撃ガン",
  item_pistolAmmo: "8x21mm弾",
  item_pistolAmmo_Armor: "8x21mm FMJ弾",
  item_pistolAmmo_Fire: "8x21mm焼夷弾",
  item_pistolAmmo_Toxic: "8x21mm毒性弾",
  item_pistolAmmo_highVelocity: "8x21mm高速弾",
  item_repeaterRifle: "SGOW M82 リボルバーライフル",
  item_revolverSmall: "EB Zseb リボルバー",
  item_revolverSmall_dusters: "EB Zseb リボルバー（ダスター）",
  item_rifleAmmo: "9x42mm弾",
  item_rifleAmmo_Armor: "9x42mm FMJ弾",
  item_rifleAmmo_Fire: "9x42mm焼夷弾",
  item_rifleAmmo_Toxic: "9x42mm毒性弾",
  item_rifleAmmo_highVelocity: "9x42mm高速弾",
  item_rifleMusket: "SGOW M82 リボルバーライフル（単発）",
  item_rifleMusketClip: "SGOW M82 リボルバーライフル（クリップ）",
  item_rifleMusketVeteran: "SGOW M82 リボルバーライフル（ベテラン）",
  item_rifleRepeaterAperture: "SGOW M82 リボルバーライフル（アパーチャ）",
  item_rocketLauncher: "ロケットランチャー",
  item_rocketLauncherAmmoArmorPiercing: "ロケット徹甲弾",
  item_rocketLauncherAmmoHighExplosion: "高爆ロケット弾",
  item_semiAutomaticPistol: 'O\'Donnel "Blitz" セミオートピストル',
  item_semiAutomaticPistol_decreasedMag: 'O\'Donnel "Blitz" セミオートピストル（小型マガジン）',
  item_semiAutomaticPistol_increasedMag: 'O\'Donnel "Blitz" セミオートピストル（大型マガジン）',
  item_shotgun: 'O\'Donnel "Pepper Mill" ショットガン',
  item_shotgunAmmo: "12 GA バックショット弾",
  item_shotgunAmmo_Armor: "12 GA ヘビーバックショット弾",
  item_shotgunAmmo_Fire: "12 GA ドラゴンブレス弾",
  item_shotgunAmmo_Toxic: "12 GA 毒性弾",
  item_shotgunAmmo_explosive: "12 GA ドラゴンブレス弾",
  item_shotgunAmmo_slug: "12 GA スラッグ弾",
  item_shotgunHandmade: 'KF "Drobulet" ショットガン',
  item_shotgunHandmade_choke: 'KF "Drobulet" ショットガン（チョーク）',
  item_shotgunTriplet: 'O\'Donnel "Pepper Mill" トリプルショットガン',
  item_sniperRifle: 'Bartka "Petros" スナイパーライフル',
  item_sniperRifleAmmo: "11x54mm弾",
  item_sniperRifleAmmo_highPenetration: "11x54mm高貫通弾",
  item_sniperRifleDoubleBarrel: 'Bartka "Petros" 二連スナイパーライフル',
  item_sniperRifle_ironSights: 'Bartka "Petros" スナイパーライフル（アイアンサイト）',
  item_sniperRifle_ironSights_silencer: 'Bartka "Petros" スナイパーライフル（アイアンサイト/サプレッサー）',
  item_sniperRifle_silencer: 'Bartka "Petros" スナイパーライフル（サプレッサー）',
};

function clean(value) {
  const trimmed = String(value ?? "").trim();
  if (trimmed.length >= 2 && trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1).replace(/""/g, '"');
  }
  return trimmed;
}

function toNumber(value) {
  const text = clean(value);
  if (!text || text === "..") return null;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : null;
}

function splitList(value) {
  const text = clean(value);
  if (!text) return [];
  return text
    .split(";")
    .map((part) => clean(part))
    .filter(Boolean);
}

function parseTsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.length > 0);
  const headers = lines[0].split("\t").map(clean);
  return lines.slice(1).map((line) => {
    const values = line.split("\t");
    return Object.fromEntries(headers.map((header, index) => [header, clean(values[index])]));
  });
}

function parseDamage(value) {
  return splitList(value)
    .map((part) => {
      const [type, amount] = part.split("=");
      const parsed = toNumber(amount);
      if (!type || parsed === null) return null;
      return { type: clean(type), amount: parsed };
    })
    .filter(Boolean);
}

function parseRangeModifiers(value) {
  return splitList(value)
    .map((part) => {
      const [distance, modifier] = part.split(":");
      const parsedModifier = toNumber(modifier);
      if (parsedModifier === null) return null;
      return {
        distance: distance === "" ? null : toNumber(distance),
        modifier: parsedModifier,
      };
    })
    .filter(Boolean);
}

function parseStateNumberMap(value) {
  const text = clean(value);
  if (!text) return {};
  const numeric = toNumber(text);
  if (numeric !== null) return { all: numeric };
  try {
    const parsed = JSON.parse(text);
    const source = parsed?.value && typeof parsed.value === "object" ? parsed.value : parsed;
    const result = {};
    for (const [key, rawValue] of Object.entries(source ?? {})) {
      const numberValue = toNumber(rawValue);
      if (numberValue !== null) result[key] = numberValue;
    }
    return result;
  } catch {
    return {};
  }
}

function parseActionList(value) {
  return splitList(value).map((part) => {
    const pieces = part.split(":");
    const name = clean(pieces[0]);
    return {
      name,
      mode: actionMode(name),
      intervalSeconds: pieces[1]?.endsWith("s") ? toNumber(pieces[1].slice(0, -1)) : toNumber(pieces[1]),
      projectileName: clean(pieces[2] ?? ""),
    };
  });
}

function actionMode(name) {
  const modeMatch = clean(name).match(/_([^_]+)$/);
  return modeMatch ? modeMatch[1].toLowerCase() : "";
}

function iconFileFromPath(path) {
  return path ? path.split(/[\\/]/).pop() : "";
}

function isRealLocalizedName(row) {
  return row?.display_name_ja && row.display_name_ja !== row.display_name_en && !String(row.ja_name_source ?? "").startsWith("missing");
}

function japaneseName(itemId, guiRow) {
  if (JA_NAME_OVERRIDES[itemId]) return JA_NAME_OVERRIDES[itemId];
  if (isRealLocalizedName(guiRow)) return guiRow.display_name_ja;
  return "";
}

function mapWeapon(row, iconManifestByItemId, itemGuiByItemId) {
  const icon = iconManifestByItemId.get(row.item_id);
  const gui = itemGuiByItemId.get(row.item_id);
  const iconFile = iconFileFromPath(icon?.path);
  return {
    textAsset: row.text_asset,
    category: row.category,
    itemId: row.item_id,
    templateChain: splitList(row.template_chain),
    niceName: row.nice_name,
    displayNameJa: japaneseName(row.item_id, gui),
    rarity: row.rarity,
    iconName: row.icon_name,
    iconPath: iconFile ? `/equipment-icons/${iconFile}` : "",
    iconWidth: toNumber(icon?.width),
    iconHeight: toNumber(icon?.height),
    damageParts: parseDamage(row.damage),
    clipSize: toNumber(row.clip_size),
    ammoTypeIds: splitList(row.ammo_types),
    rangeActions: parseActionList(row.range_actions),
    reloadActions: parseActionList(row.reload_actions),
    spread: row.spread,
    weaponRangeModifiers: parseRangeModifiers(row.weapon_range_modifiers),
    recoilPower: row.recoil_power,
    headshotMultiplier: parseStateNumberMap(row.headshot_multiplier),
    magnification: parseStateNumberMap(row.magnification),
    movementSpeedModifier: parseStateNumberMap(row.movement_speed_modifier),
    spawnBlueprint: row.spawn_blueprint,
    rewardCount: toNumber(row.reward_count),
  };
}

function mapAmmo(row, itemGuiByItemId) {
  const gui = itemGuiByItemId.get(row.item_id);
  const iconFile = iconFileFromPath(gui?.icon_path);
  return {
    textAsset: row.text_asset,
    itemId: row.item_id,
    templateChain: splitList(row.template_chain),
    niceName: row.nice_name,
    displayNameJa: japaneseName(row.item_id, gui),
    rarity: row.rarity,
    iconName: gui?.icon_name ?? "",
    ammoIconName: gui?.ammo_icon_name ?? "",
    iconPath: iconFile ? `/equipment-icons/${iconFile}` : "",
    iconWidth: toNumber(gui?.icon_width),
    iconHeight: toNumber(gui?.icon_height),
    damageParts: parseDamage(row.damage),
    rangeModifiers: parseRangeModifiers(row.range_modifiers),
    customProjectile: row.custom_projectile,
    raytraceSpread: row.raytrace_spread,
    stackSmall: toNumber(row.stack_small),
    stackMedium: toNumber(row.stack_medium),
    stackLarge: toNumber(row.stack_large),
    rewardCount: toNumber(row.reward_count),
    spawnBlueprint: row.spawn_blueprint,
  };
}

function mapShotgunPellet(row) {
  return {
    weaponId: row.weapon_id,
    weaponName: row.weapon_name,
    weaponSource: row.weapon_source,
    action: row.action,
    actionSource: row.action_source,
    actionTargetData: toNumber(row.action_target_data),
    actionSpreadCount: toNumber(row.action_spread_count),
    mode: actionMode(row.action),
    ammoId: row.ammo_id,
    ammoName: row.ammo_name,
    ammoSource: row.ammo_source,
    ammoSpreadOverrideCount: toNumber(row.ammo_spread_override_count),
    effectivePelletCount: toNumber(row.effective_pellet_count),
    damagePerPelletParts: parseDamage(row.damage_per_pellet),
    allPelletsDamageParts: parseDamage(row.all_pellets_damage_before_falloff),
    projectile: row.projectile,
    ammoCustomProjectile: row.ammo_custom_projectile,
  };
}

function mapProjectile(row) {
  return {
    textAsset: row.text_asset,
    projectileName: row.projectile_name,
    projectileType: row.projectile_type,
    velocity: toNumber(row.velocity),
    weight: toNumber(row.weight),
    gravity: toNumber(row.gravity),
    drag: toNumber(row.drag),
    radiusStart: toNumber(row.radius_start),
    radiusEnd: toNumber(row.radius_end),
    autoDestroy: toNumber(row.auto_destroy),
    ricochetAngle: toNumber(row.ricochet_angle),
    ricochetCount: toNumber(row.ricochet_count),
    penetrationAngle: toNumber(row.penetration_angle),
    penetrationCount: toNumber(row.penetration_count),
    newProjectileOnPenetration: row.new_projectile_on_penetration,
    newAmmoOnPenetration: row.new_ammo_on_penetration,
  };
}

function mapArmor(row) {
  return {
    kind: row.kind,
    textAsset: row.text_asset,
    entryName: row.entry_name,
    templateChain: splitList(row.template_chain),
    healthValue: toNumber(row.health_value),
    healthCount: toNumber(row.health_count),
    damageMasks: splitList(row.damage_mask),
    regenDelay: toNumber(row.regen_delay),
    regenSpeed: toNumber(row.regen_speed),
    initialItems: splitList(row.initial_items),
  };
}

async function readTsv(fileName) {
  return parseTsv(await readFile(resolve(SOURCE_DIR, fileName), "utf8"));
}

async function main() {
  const [weaponRows, ammoRows, projectileRows, armorRows, shotgunPelletRows] = await Promise.all([
    readTsv(SOURCE_FILES.weapons),
    readTsv(SOURCE_FILES.ammo),
    readTsv(SOURCE_FILES.projectiles),
    readTsv(SOURCE_FILES.armor),
    readTsv(SOURCE_FILES.shotgunPellets),
  ]);
  const iconManifestRows = await readTsv(SOURCE_FILES.icons);
  const itemGuiRows = await readTsv(SOURCE_FILES.itemGui);
  const iconManifestByItemId = new Map(iconManifestRows.map((row) => [row.item_id, row]));
  const itemGuiByItemId = new Map(itemGuiRows.map((row) => [row.item_id, row]));

  const source = {
    generatedAt: new Date().toISOString(),
    sourceFiles: Object.values(SOURCE_FILES),
    notes: [
      "Generated from local SAND reference tables bundled at build time.",
      "Japanese display names use local overrides when no local Japanese table is available.",
      "Damage display uses item damage and distance data from the local data tables. Runtime server or balance modifiers may differ.",
      "Shotgun damage display uses effective pellet counts from shotgun_pellet_summary.tsv.",
      "Headshot display uses weapon headshot data from the local data tables.",
      "Weapon and ammo icons are bundled for convenience; SAND assets and trademarks belong to their respective rightsholders.",
    ],
  };

  const content = `import type { AmmoStat, ArmorStat, EquipmentStatsSource, ProjectileStat, ShotgunPelletStat, WeaponStat } from "../types";\n\n`
    + `export const equipmentStatsSource: EquipmentStatsSource = ${JSON.stringify(source, null, 2)};\n\n`
    + `export const weaponStats: WeaponStat[] = ${JSON.stringify(weaponRows.map((row) => mapWeapon(row, iconManifestByItemId, itemGuiByItemId)), null, 2)};\n\n`
    + `export const ammoStats: AmmoStat[] = ${JSON.stringify(ammoRows.map((row) => mapAmmo(row, itemGuiByItemId)), null, 2)};\n\n`
    + `export const shotgunPelletStats: ShotgunPelletStat[] = ${JSON.stringify(shotgunPelletRows.map(mapShotgunPellet), null, 2)};\n\n`
    + `export const projectileStats: ProjectileStat[] = ${JSON.stringify(projectileRows.map(mapProjectile), null, 2)};\n\n`
    + `export const armorStats: ArmorStat[] = ${JSON.stringify(armorRows.map(mapArmor), null, 2)};\n`;

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, content, "utf8");
  console.log(`Generated ${weaponRows.length} weapons, ${ammoRows.length} ammo rows, ${shotgunPelletRows.length} shotgun pellet rows, ${projectileRows.length} projectiles, ${armorRows.length} armor/health rows -> ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
