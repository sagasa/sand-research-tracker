import { type MouseEvent, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SecurityIcon from "@mui/icons-material/Security";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { ammoStats, armorStats, projectileStats, shotgunPelletStats, weaponStats } from "../../generated/equipmentStatsData";
import { formatNumber } from "../../tracker";
import type { AmmoStat, ArmorStat, DamagePart, RangeModifierPoint, ShotgunPelletStat, StateNumberMap, WeaponStat } from "../../types";

type DamagePoint = {
  distance: number;
  damage: number;
};

const selectableWeapons = weaponStats
  .filter((weapon) => !weapon.itemId.toLowerCase().startsWith("dev"))
  .sort((a, b) => weaponName(a).localeCompare(weaponName(b), "ja"));

const rarityColors: Record<string, "default" | "primary" | "secondary" | "success" | "warning" | "error"> = {
  COMMON: "default",
  UNCOMMON: "success",
  RARE: "primary",
  NOTEWORTHY: "secondary",
  REMARKABLE: "warning",
  EXPERIMENTAL: "error",
};

const damageReferenceLines = [
  { value: 50, label: "HP 50" },
  { value: 150, label: "HP 150" },
  { value: 200, label: "Armor 200" },
  { value: 250, label: "Armor 250" },
  { value: 300, label: "Armor 300" },
];

function displayName(value: string, fallback: string) {
  return value && !value.startsWith("###TODO") ? value : fallback;
}

function weaponName(weapon: WeaponStat) {
  return displayName(weapon.displayNameJa, displayName(weapon.niceName, weapon.itemId));
}

function ammoName(ammo: AmmoStat | undefined) {
  if (!ammo) return "";
  return displayName(ammo.displayNameJa, displayName(ammo.niceName, ammo.itemId));
}

function secondaryName(primary: string, englishName: string, itemId: string) {
  const english = displayName(englishName, itemId);
  return primary && primary !== english ? english : itemId;
}

function pelletKey(weaponId: string, ammoId: string) {
  return `${weaponId}\u0000${ammoId}`;
}

function pelletModeLabel(mode: string) {
  if (mode === "hip") return "腰だめ";
  if (mode === "scope") return "照準";
  return mode || "射撃";
}

function sortPelletProfiles(a: ShotgunPelletStat, b: ShotgunPelletStat) {
  const order = { hip: 0, scope: 1 } as Record<string, number>;
  return (order[a.mode] ?? 9) - (order[b.mode] ?? 9) || a.action.localeCompare(b.action);
}

function selectPelletProfile(profiles: ShotgunPelletStat[], preferredMode: string) {
  if (profiles.length === 0) return undefined;
  return (
    profiles.find((profile) => profile.mode === preferredMode) ??
    profiles.find((profile) => profile.mode === "scope") ??
    profiles.find((profile) => profile.mode === "hip") ??
    profiles[0]
  );
}

function totalDamage(parts: DamagePart[]) {
  return parts.reduce((sum, part) => sum + part.amount, 0);
}

function formatDamage(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "-";
  return value >= 100 ? formatNumber(Math.round(value)) : value.toFixed(1).replace(/\.0$/, "");
}

function damageBreakdown(parts: DamagePart[]) {
  if (parts.length === 0) return [];
  return parts.map((part) => `${part.type} ${formatDamage(part.amount)}`);
}

function damagePartsFor(ammo: AmmoStat | undefined, pelletProfile?: ShotgunPelletStat) {
  if (!ammo) return [];
  return pelletProfile?.allPelletsDamageParts.length ? pelletProfile.allPelletsDamageParts : ammo.damageParts;
}

function baseDamageFor(ammo: AmmoStat | undefined, pelletProfile?: ShotgunPelletStat) {
  return totalDamage(damagePartsFor(ammo, pelletProfile));
}

function numericRangePoints(points: RangeModifierPoint[]) {
  return points
    .filter((point): point is { distance: number; modifier: number } => point.distance !== null)
    .sort((a, b) => a.distance - b.distance);
}

function modifierAt(points: RangeModifierPoint[], distance: number) {
  const numeric = numericRangePoints(points);
  if (numeric.length === 0) return 1;
  let current = numeric[0].modifier;
  for (const point of numeric) {
    if (distance < point.distance) break;
    current = point.modifier;
  }
  return current;
}

function primaryMultiplier(value: StateNumberMap, fallback = 1) {
  if (typeof value.all === "number") return value.all;
  if (typeof value.scope === "number") return value.scope;
  const values = Object.values(value).filter(Number.isFinite);
  return values.length > 0 ? Math.max(...values) : fallback;
}

function damageAtDistance(weapon: WeaponStat, ammo: AmmoStat | undefined, distance: number, pelletProfile?: ShotgunPelletStat) {
  if (!ammo) return 0;
  const baseDamage = baseDamageFor(ammo, pelletProfile);
  if (baseDamage <= 0) return 0;
  return baseDamage * modifierAt(weapon.weaponRangeModifiers, distance) * modifierAt(ammo.rangeModifiers, distance);
}

function curveDistances(weapon: WeaponStat, ammo: AmmoStat | undefined) {
  const distances = new Set<number>([0, 25, 50, 75, 100, 150, 200, 250, 300]);
  for (const point of numericRangePoints(weapon.weaponRangeModifiers)) distances.add(point.distance);
  for (const point of numericRangePoints(ammo?.rangeModifiers ?? [])) distances.add(point.distance);
  return [...distances].filter((distance) => distance >= 0).sort((a, b) => a - b);
}

function buildDamageCurve(weapon: WeaponStat, ammo: AmmoStat | undefined, pelletProfile?: ShotgunPelletStat): DamagePoint[] {
  return curveDistances(weapon, ammo).map((distance) => ({
    distance,
    damage: damageAtDistance(weapon, ammo, distance, pelletProfile),
  }));
}

function CategoryBadge({ weapon }: { weapon: WeaponStat }) {
  const icon = weapon.category === "sniper" || weapon.category === "rifle"
    ? <TrackChangesIcon fontSize="small" />
    : <GpsFixedIcon fontSize="small" />;

  return (
    <Chip
      icon={icon}
      label={weapon.category}
      size="small"
      variant="outlined"
      sx={{ minWidth: 118, justifyContent: "flex-start" }}
    />
  );
}

function WeaponIcon({ weapon, size = 44 }: { weapon: WeaponStat; size?: number }) {
  if (!weapon.iconPath) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 1,
          display: "grid",
          placeItems: "center",
          color: "text.secondary",
          flex: "0 0 auto",
        }}
      >
        <GpsFixedIcon fontSize="small" />
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={weapon.iconPath}
      alt=""
      loading="lazy"
      sx={{
        width: size,
        height: size,
        objectFit: "contain",
        border: "1px solid rgba(255,255,255,0.16)",
        borderRadius: 1,
        backgroundColor: "rgba(0,0,0,0.25)",
        flex: "0 0 auto",
      }}
    />
  );
}

function AmmoIcon({ ammo, size = 40 }: { ammo: AmmoStat | undefined; size?: number }) {
  if (!ammo?.iconPath) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 1,
          display: "grid",
          placeItems: "center",
          color: "text.secondary",
          flex: "0 0 auto",
        }}
      >
        <Inventory2Icon fontSize="small" />
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={ammo.iconPath}
      alt=""
      loading="lazy"
      sx={{
        width: size,
        height: size,
        objectFit: "contain",
        border: "1px solid rgba(255,255,255,0.16)",
        borderRadius: 1,
        backgroundColor: "rgba(0,0,0,0.25)",
        flex: "0 0 auto",
      }}
    />
  );
}

function DamageChart({
  weapon,
  ammo,
  pelletProfile,
  selectedDistance,
}: {
  weapon: WeaponStat;
  ammo: AmmoStat | undefined;
  pelletProfile?: ShotgunPelletStat;
  selectedDistance: number;
}) {
  const points = useMemo(() => buildDamageCurve(weapon, ammo, pelletProfile), [ammo, pelletProfile, weapon]);
  const headshotMultiplier = primaryMultiplier(weapon.headshotMultiplier);
  const headshotPoints = points.map((point) => ({
    distance: point.distance,
    damage: point.damage * headshotMultiplier,
  }));
  const maxDistance = Math.max(...points.map((point) => point.distance), 300);
  const referenceMaxDamage = Math.max(...damageReferenceLines.map((line) => line.value));
  const maxDamage = Math.max(...headshotPoints.map((point) => point.damage), ...points.map((point) => point.damage), referenceMaxDamage, 1);

  if (!ammo || maxDamage <= 0) {
    return (
      <Alert severity="info" variant="outlined">
        この組み合わせには表示できるダメージデータがありません。
      </Alert>
    );
  }

  const width = 720;
  const height = 300;
  const paddingLeft = 54;
  const paddingRight = 24;
  const paddingTop = 22;
  const paddingBottom = 44;
  const plotWidth = width - paddingLeft - paddingRight;
  const plotHeight = height - paddingTop - paddingBottom;
  const x = (distance: number) => paddingLeft + (distance / maxDistance) * plotWidth;
  const y = (damage: number) => paddingTop + plotHeight - (damage / maxDamage) * plotHeight;
  const selectedX = x(Math.min(selectedDistance, maxDistance));
  const selectedDamage = damageAtDistance(weapon, ammo, selectedDistance, pelletProfile);
  const selectedHeadshotDamage = selectedDamage * headshotMultiplier;
  const path = points.map((point) => `${x(point.distance)},${y(point.damage)}`).join(" ");
  const headshotPath = headshotPoints.map((point) => `${x(point.distance)},${y(point.damage)}`).join(" ");
  const ticks = [...new Set([0, Math.round(maxDamage / 2), Math.round(maxDamage)])].sort((a, b) => a - b);
  const visibleReferenceLines = damageReferenceLines.filter((line) => line.value <= maxDamage);

  return (
    <Box sx={{ overflowX: "auto" }}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="distance damage chart">
        <rect x={paddingLeft} y={paddingTop} width={plotWidth} height={plotHeight} fill="rgba(255,255,255,0.03)" />
        {[0, 100, 200, 300].filter((distance) => distance <= maxDistance).map((distance) => (
          <g key={distance}>
            <line x1={x(distance)} y1={paddingTop} x2={x(distance)} y2={height - paddingBottom} stroke="rgba(255,255,255,0.08)" />
            <text x={x(distance)} y={height - 14} fill="#9aa4ad" fontSize="12" textAnchor="middle">
              {distance}m
            </text>
          </g>
        ))}
        {ticks.map((damage) => (
          <g key={damage}>
            <line x1={paddingLeft} y1={y(damage)} x2={width - paddingRight} y2={y(damage)} stroke="rgba(255,255,255,0.08)" />
            <text x={10} y={y(damage) + 4} fill="#9aa4ad" fontSize="12">
              {formatDamage(damage)}
            </text>
          </g>
        ))}
        {visibleReferenceLines.map((line) => (
          <line
            key={line.value}
            x1={paddingLeft}
            y1={y(line.value)}
            x2={width - paddingRight}
            y2={y(line.value)}
            stroke="rgba(216,226,234,0.16)"
            strokeDasharray="3 7"
          />
        ))}
        <polyline fill="none" stroke="#79d48b" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" points={path} />
        <polyline fill="none" stroke="#ffb15f" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" points={headshotPath} />
        <line x1={selectedX} y1={paddingTop} x2={selectedX} y2={height - paddingBottom} stroke="#d8e2ea" strokeDasharray="5 5" />
        <circle cx={selectedX} cy={y(selectedDamage)} r="6" fill="#79d48b" stroke="#0b1116" strokeWidth="2" />
        <circle cx={selectedX} cy={y(selectedHeadshotDamage)} r="5" fill="#ffb15f" stroke="#0b1116" strokeWidth="2" />
        <text x={paddingLeft} y={18} fill="#d8e2ea" fontSize="13">
          距離ごとのダメージ
        </text>
      </svg>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
        <Chip label="通常" size="small" sx={{ borderColor: "#79d48b", color: "#79d48b" }} variant="outlined" />
        <Chip label="ヘッドショット" size="small" sx={{ borderColor: "#ffb15f", color: "#ffb15f" }} variant="outlined" />
        <Chip
          label="補助線: HP 50/150、Armor 200/250/300"
          size="small"
          sx={{ borderColor: "rgba(216,226,234,0.2)", color: "text.secondary" }}
          variant="outlined"
        />
      </Stack>
    </Box>
  );
}

function DamageBreakdown({ parts }: { parts: DamagePart[] }) {
  const labels = damageBreakdown(parts);
  if (labels.length === 0) {
    return <Typography color="text.secondary">内訳なし</Typography>;
  }

  return (
    <Stack direction="row" spacing={0.75} flexWrap="wrap">
      {labels.map((label) => (
        <Chip key={label} label={label} size="small" variant="outlined" />
      ))}
    </Stack>
  );
}

function AmmoComparisonTable({
  weapon,
  ammoRows,
  selectedAmmoId,
  selectedDistance,
  pelletProfileForAmmo,
  onSelectAmmo,
}: {
  weapon: WeaponStat;
  ammoRows: AmmoStat[];
  selectedAmmoId: string;
  selectedDistance: number;
  pelletProfileForAmmo: (ammo: AmmoStat) => ShotgunPelletStat | undefined;
  onSelectAmmo: (id: string) => void;
}) {
  return (
    <TableContainer sx={{ maxHeight: 360 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>弾</TableCell>
            <TableCell align="right">基礎</TableCell>
            <TableCell align="right">ペレット</TableCell>
            <TableCell align="right">{selectedDistance}m</TableCell>
            <TableCell align="right">ヘッドショット {selectedDistance}m</TableCell>
            <TableCell>補足</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ammoRows.map((ammo) => {
            const pelletProfile = pelletProfileForAmmo(ammo);
            const distanceDamage = damageAtDistance(weapon, ammo, selectedDistance, pelletProfile);
            return (
              <TableRow
                hover
                selected={ammo.itemId === selectedAmmoId}
                key={ammo.itemId}
                onClick={() => onSelectAmmo(ammo.itemId)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell sx={{ minWidth: 260 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AmmoIcon ammo={ammo} size={34} />
                    <Box>
                      <Typography fontWeight={700}>{ammoName(ammo)}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {secondaryName(ammoName(ammo), ammo.niceName, ammo.itemId)} / {ammo.rarity || "UNKNOWN"}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell align="right">{formatDamage(baseDamageFor(ammo, pelletProfile))}</TableCell>
                <TableCell align="right">
                  {pelletProfile?.effectivePelletCount ? `${pelletProfile.effectivePelletCount}発` : "-"}
                </TableCell>
                <TableCell align="right">{formatDamage(distanceDamage)}</TableCell>
                <TableCell align="right">
                  {formatDamage(distanceDamage * primaryMultiplier(weapon.headshotMultiplier))}
                </TableCell>
                <TableCell>
                  {pelletProfile
                    ? `${pelletModeLabel(pelletProfile.mode)} / ${pelletProfile.ammoCustomProjectile || ammo.customProjectile || "-"}`
                    : ammo.customProjectile || "-"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ArmorTable({ rows }: { rows: ArmorStat[] }) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>種別</TableCell>
            <TableCell>名前</TableCell>
            <TableCell align="right">耐久/HP</TableCell>
            <TableCell align="right">数</TableCell>
            <TableCell>対象</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={`${row.kind}-${row.entryName}`}>
              <TableCell>
                <Chip
                  icon={row.kind === "armor" ? <SecurityIcon fontSize="small" /> : <Inventory2Icon fontSize="small" />}
                  label={row.kind}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Typography fontWeight={700}>{row.entryName}</Typography>
              </TableCell>
              <TableCell align="right">{row.healthValue ?? "-"}</TableCell>
              <TableCell align="right">{row.healthCount ?? "-"}</TableCell>
              <TableCell>{row.damageMasks.join(" / ") || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function EquipmentStatsPage() {
  const [selectedWeaponId, setSelectedWeaponId] = useState(selectableWeapons[0]?.itemId ?? weaponStats[0]?.itemId ?? "");
  const [selectedAmmoId, setSelectedAmmoId] = useState("");
  const [selectedPelletMode, setSelectedPelletMode] = useState("");
  const [selectedDistance, setSelectedDistance] = useState(50);

  const ammoById = useMemo(() => new Map(ammoStats.map((ammo) => [ammo.itemId, ammo])), []);
  const projectileByName = useMemo(
    () => new Map(projectileStats.map((projectile) => [projectile.projectileName, projectile])),
    [],
  );
  const pelletProfilesByPair = useMemo(() => {
    const profiles = new Map<string, ShotgunPelletStat[]>();
    for (const profile of shotgunPelletStats) {
      const key = pelletKey(profile.weaponId, profile.ammoId);
      const rows = profiles.get(key) ?? [];
      rows.push(profile);
      profiles.set(key, rows);
    }
    for (const rows of profiles.values()) rows.sort(sortPelletProfiles);
    return profiles;
  }, []);

  const selectedWeapon =
    selectableWeapons.find((weapon) => weapon.itemId === selectedWeaponId) ??
    selectableWeapons[0] ??
    weaponStats[0];

  if (!selectedWeapon) {
    return (
      <Alert severity="warning" variant="outlined">
        武器データがありません。
      </Alert>
    );
  }

  const compatibleAmmo = selectedWeapon.ammoTypeIds
    .map((ammoId) => ammoById.get(ammoId))
    .filter((ammo): ammo is AmmoStat => Boolean(ammo));
  const ammoRows = compatibleAmmo.length > 0 ? compatibleAmmo : ammoStats;
  const selectedAmmo = ammoRows.find((ammo) => ammo.itemId === selectedAmmoId) ?? ammoRows[0];
  const selectedProjectile = selectedAmmo?.customProjectile
    ? projectileByName.get(selectedAmmo.customProjectile)
    : undefined;

  const pelletProfilesForAmmo = (ammo: AmmoStat | undefined) => (
    ammo ? pelletProfilesByPair.get(pelletKey(selectedWeapon.itemId, ammo.itemId)) ?? [] : []
  );
  const pelletProfileForAmmo = (ammo: AmmoStat) => selectPelletProfile(pelletProfilesForAmmo(ammo), selectedPelletMode);
  const selectedPelletProfiles = pelletProfilesForAmmo(selectedAmmo);
  const selectedPelletProfile = selectPelletProfile(selectedPelletProfiles, selectedPelletMode);
  const selectedDamageParts = damagePartsFor(selectedAmmo, selectedPelletProfile);
  const selectedDamage = damageAtDistance(selectedWeapon, selectedAmmo, selectedDistance, selectedPelletProfile);
  const selectedHeadshotMultiplier = primaryMultiplier(selectedWeapon.headshotMultiplier);
  const selectedHeadshotDamage = selectedDamage * selectedHeadshotMultiplier;
  const baseDamage = totalDamage(selectedDamageParts);
  const perPelletDamage = selectedPelletProfile ? totalDamage(selectedPelletProfile.damagePerPelletParts) : 0;
  const weaponDamage = totalDamage(selectedWeapon.damageParts);

  function handleWeaponChange(event: SelectChangeEvent) {
    setSelectedWeaponId(event.target.value);
    setSelectedAmmoId("");
    setSelectedPelletMode("");
  }

  function handleAmmoChange(event: SelectChangeEvent) {
    setSelectedAmmoId(event.target.value);
  }

  function handlePelletModeChange(_event: MouseEvent<HTMLElement>, value: string | null) {
    if (value) setSelectedPelletMode(value);
  }

  return (
    <Stack spacing={2.5}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h2">武器ダメージ</Typography>
            <Typography color="text.secondary">
              銃と弾を選ぶと、選択した距離でのダメージと距離グラフを表示します。
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" },
              alignItems: "end",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="weapon-select-label">銃</InputLabel>
              <Select
                labelId="weapon-select-label"
                label="銃"
                value={selectedWeapon.itemId}
                onChange={handleWeaponChange}
                renderValue={() => weaponName(selectedWeapon)}
              >
                {selectableWeapons.map((weapon) => (
                  <MenuItem key={weapon.itemId} value={weapon.itemId}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <WeaponIcon weapon={weapon} size={34} />
                      <Box>
                        <Typography>{weaponName(weapon)}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {secondaryName(weaponName(weapon), weapon.niceName, weapon.itemId)} / {weapon.category}
                        </Typography>
                      </Box>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="ammo-select-label">弾</InputLabel>
              <Select
                labelId="ammo-select-label"
                label="弾"
                value={selectedAmmo?.itemId ?? ""}
                onChange={handleAmmoChange}
                renderValue={() => ammoName(selectedAmmo)}
              >
                {ammoRows.map((ammo) => {
                  const pelletProfile = pelletProfileForAmmo(ammo);
                  const baseLabel = pelletProfile
                    ? `全弾 ${formatDamage(baseDamageFor(ammo, pelletProfile))} / ${pelletProfile.effectivePelletCount ?? "-"}発`
                    : `基礎 ${formatDamage(totalDamage(ammo.damageParts))}`;
                  return (
                    <MenuItem key={ammo.itemId} value={ammo.itemId}>
                      <Stack direction="row" spacing={1.25} alignItems="center">
                        <AmmoIcon ammo={ammo} size={34} />
                        <Box>
                          <Typography>{ammoName(ammo)}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {secondaryName(ammoName(ammo), ammo.niceName, ammo.itemId)} / {baseLabel}
                          </Typography>
                        </Box>
                      </Stack>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {selectedPelletProfiles.length > 1 ? (
              <Box>
                <Typography variant="caption" color="text.secondary">射撃モード</Typography>
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={selectedPelletProfile?.mode ?? ""}
                  onChange={handlePelletModeChange}
                  sx={{
                    display: "flex",
                    mt: 0.5,
                    "& .MuiToggleButton-root": {
                      flex: 1,
                      px: 1.25,
                      whiteSpace: "nowrap",
                    },
                  }}
                >
                  {selectedPelletProfiles.map((profile) => (
                    <ToggleButton key={profile.action} value={profile.mode}>
                      {pelletModeLabel(profile.mode)} / {profile.effectivePelletCount ?? "-"}発
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>
            ) : null}

            <Box>
              <Typography variant="caption" color="text.secondary">距離: {selectedDistance}m</Typography>
              <Slider
                min={0}
                max={300}
                step={5}
                value={selectedDistance}
                valueLabelDisplay="auto"
                onChange={(_event, value) => setSelectedDistance(Array.isArray(value) ? value[0] : value)}
              />
            </Box>
          </Box>
        </Stack>
      </Paper>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "360px 1fr" }, gap: 2 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={1.75}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <WeaponIcon weapon={selectedWeapon} size={72} />
              <Box>
                <Typography variant="h2">{weaponName(selectedWeapon)}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {secondaryName(weaponName(selectedWeapon), selectedWeapon.niceName, selectedWeapon.itemId)}
                </Typography>
                <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mt: 0.75 }}>
                  <CategoryBadge weapon={selectedWeapon} />
                  <Chip label={selectedWeapon.rarity || "UNKNOWN"} size="small" color={rarityColors[selectedWeapon.rarity] ?? "default"} />
                </Stack>
              </Box>
            </Stack>

            <Divider />

            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <AmmoIcon ammo={selectedAmmo} size={42} />
                <Box>
                  <Typography fontWeight={700}>{ammoName(selectedAmmo)}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {selectedAmmo ? secondaryName(ammoName(selectedAmmo), selectedAmmo.niceName, selectedAmmo.itemId) : ""}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary">{selectedDistance}m の通常ダメージ</Typography>
              <Typography variant="h1" sx={{ lineHeight: 1.05 }}>{formatDamage(selectedDamage)}</Typography>
            </Box>

            <Box className="stat-pair-grid">
              <Box>
                <Typography variant="caption" color="text.secondary">ヘッドショット</Typography>
                <Typography>{formatDamage(selectedHeadshotDamage)}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">ヘッドショット倍率</Typography>
                <Typography>{selectedHeadshotMultiplier}x</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  {selectedPelletProfile ? "全弾基礎ダメージ" : "弾の基礎ダメージ"}
                </Typography>
                <Typography>{formatDamage(baseDamage)}</Typography>
              </Box>
              {selectedPelletProfile ? (
                <>
                  <Box>
                    <Typography variant="caption" color="text.secondary">ペレット</Typography>
                    <Typography>
                      {selectedPelletProfile.effectivePelletCount ?? "-"}発（{pelletModeLabel(selectedPelletProfile.mode)}）
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">1ペレット</Typography>
                    <Typography>{formatDamage(perPelletDamage)}</Typography>
                  </Box>
                </>
              ) : null}
              <Box>
                <Typography variant="caption" color="text.secondary">装弾数</Typography>
                <Typography>{selectedWeapon.clipSize ?? "-"}</Typography>
              </Box>
              {weaponDamage > 0 ? (
                <Box>
                  <Typography variant="caption" color="text.secondary">銃側ダメージ</Typography>
                  <Typography>{formatDamage(weaponDamage)}</Typography>
                </Box>
              ) : null}
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary">
                {selectedPelletProfile ? "全弾命中内訳" : "ダメージ内訳"}
              </Typography>
              <DamageBreakdown parts={selectedDamageParts} />
            </Box>

            {selectedProjectile ? (
              <Box>
                <Typography variant="caption" color="text.secondary">弾の挙動</Typography>
                <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mt: 0.75 }}>
                  <Chip label={selectedProjectile.projectileName} size="small" color="primary" />
                  <Chip label={`速度 ${selectedProjectile.velocity ?? "-"}`} size="small" variant="outlined" />
                  <Chip label={`重力 ${selectedProjectile.gravity ?? "-"}`} size="small" variant="outlined" />
                </Stack>
              </Box>
            ) : null}
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1.25} alignItems="baseline" flexWrap="wrap">
              <Typography variant="h2">距離グラフ</Typography>
              <Typography color="text.secondary">
                {ammoName(selectedAmmo)}
              </Typography>
            </Stack>
            <DamageChart
              weapon={selectedWeapon}
              ammo={selectedAmmo}
              pelletProfile={selectedPelletProfile}
              selectedDistance={selectedDistance}
            />
          </Stack>
        </Paper>
      </Box>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          <Box>
            <Typography variant="h2">この銃で使える弾</Typography>
            <Typography color="text.secondary">
              行を選ぶと、上のダメージとグラフを切り替えます。
            </Typography>
          </Box>
          <AmmoComparisonTable
            weapon={selectedWeapon}
            ammoRows={ammoRows}
            selectedAmmoId={selectedAmmo?.itemId ?? ""}
            selectedDistance={selectedDistance}
            pelletProfileForAmmo={pelletProfileForAmmo}
            onSelectAmmo={setSelectedAmmoId}
          />
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <SecurityIcon color="primary" />
            <Typography variant="h2">アーマー / プレイヤーHP</Typography>
          </Stack>
          <ArmorTable rows={armorStats} />
        </Stack>
      </Paper>
    </Stack>
  );
}
