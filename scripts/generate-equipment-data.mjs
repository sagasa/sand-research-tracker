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
    const modeMatch = name.match(/_([^_]+)$/);
    return {
      name,
      mode: modeMatch ? modeMatch[1].toLowerCase() : "",
      intervalSeconds: pieces[1]?.endsWith("s") ? toNumber(pieces[1].slice(0, -1)) : toNumber(pieces[1]),
      projectileName: clean(pieces[2] ?? ""),
    };
  });
}

function mapWeapon(row, iconManifestByItemId) {
  const icon = iconManifestByItemId.get(row.item_id);
  const iconFile = icon?.path ? icon.path.split(/[\\/]/).pop() : "";
  return {
    textAsset: row.text_asset,
    category: row.category,
    itemId: row.item_id,
    templateChain: splitList(row.template_chain),
    niceName: row.nice_name,
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
    criticalMultiplier: parseStateNumberMap(row.critical_multiplier),
    magnification: parseStateNumberMap(row.magnification),
    movementSpeedModifier: parseStateNumberMap(row.movement_speed_modifier),
    spawnBlueprint: row.spawn_blueprint,
    rewardCount: toNumber(row.reward_count),
  };
}

function mapAmmo(row) {
  return {
    textAsset: row.text_asset,
    itemId: row.item_id,
    templateChain: splitList(row.template_chain),
    niceName: row.nice_name,
    rarity: row.rarity,
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
  const [weaponRows, ammoRows, projectileRows, armorRows] = await Promise.all([
    readTsv(SOURCE_FILES.weapons),
    readTsv(SOURCE_FILES.ammo),
    readTsv(SOURCE_FILES.projectiles),
    readTsv(SOURCE_FILES.armor),
  ]);
  const iconManifestRows = await readTsv(SOURCE_FILES.icons);
  const iconManifestByItemId = new Map(iconManifestRows.map((row) => [row.item_id, row]));

  const source = {
    generatedAt: new Date().toISOString(),
    sourceFiles: Object.values(SOURCE_FILES),
    notes: [
      "Generated from local SAND reference tables bundled at build time.",
      "Damage display uses item damage and range modifiers from the local data tables. Runtime server or balance modifiers may differ.",
      "Weapon icons are bundled for convenience; SAND assets and trademarks belong to their respective rightsholders.",
      "Damage notes indicate headshot multiplier is applied from ammo when present, otherwise weapon; critical multiplier is shown as reference data.",
    ],
  };

  const content = `import type { AmmoStat, ArmorStat, EquipmentStatsSource, ProjectileStat, WeaponStat } from "../types";\n\n`
    + `export const equipmentStatsSource: EquipmentStatsSource = ${JSON.stringify(source, null, 2)};\n\n`
    + `export const weaponStats: WeaponStat[] = ${JSON.stringify(weaponRows.map((row) => mapWeapon(row, iconManifestByItemId)), null, 2)};\n\n`
    + `export const ammoStats: AmmoStat[] = ${JSON.stringify(ammoRows.map(mapAmmo), null, 2)};\n\n`
    + `export const projectileStats: ProjectileStat[] = ${JSON.stringify(projectileRows.map(mapProjectile), null, 2)};\n\n`
    + `export const armorStats: ArmorStat[] = ${JSON.stringify(armorRows.map(mapArmor), null, 2)};\n`;

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, content, "utf8");
  console.log(`Generated ${weaponRows.length} weapons, ${ammoRows.length} ammo rows, ${projectileRows.length} projectiles, ${armorRows.length} armor/health rows -> ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
