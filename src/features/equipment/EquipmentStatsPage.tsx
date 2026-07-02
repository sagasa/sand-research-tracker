import { useMemo, useState } from "react";
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
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SecurityIcon from "@mui/icons-material/Security";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { ammoStats, armorStats, projectileStats, weaponStats } from "../../generated/equipmentStatsData";
import { formatNumber } from "../../tracker";
import type { AmmoStat, ArmorStat, DamagePart, RangeModifierPoint, StateNumberMap, WeaponStat } from "../../types";

type DamagePoint = {
  distance: number;
  damage: number;
};

const selectableWeapons = weaponStats
  .filter((weapon) => !weapon.itemId.toLowerCase().startsWith("dev"))
  .sort((a, b) => displayName(a.niceName, a.itemId).localeCompare(displayName(b.niceName, b.itemId)));

const rarityColors: Record<string, "default" | "primary" | "secondary" | "success" | "warning" | "error"> = {
  COMMON: "default",
  UNCOMMON: "success",
  RARE: "primary",
  NOTEWORTHY: "secondary",
  REMARKABLE: "warning",
  EXPERIMENTAL: "error",
};

function displayName(value: string, fallback: string) {
  return value && !value.startsWith("###TODO") ? value : fallback;
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

function damageAtDistance(weapon: WeaponStat, ammo: AmmoStat | undefined, distance: number) {
  if (!ammo) return 0;
  const baseDamage = totalDamage(ammo.damageParts);
  if (baseDamage <= 0) return 0;
  return baseDamage * modifierAt(weapon.weaponRangeModifiers, distance) * modifierAt(ammo.rangeModifiers, distance);
}

function curveDistances(weapon: WeaponStat, ammo: AmmoStat | undefined) {
  const distances = new Set<number>([0, 25, 50, 75, 100, 150, 200, 250, 300]);
  for (const point of numericRangePoints(weapon.weaponRangeModifiers)) distances.add(point.distance);
  for (const point of numericRangePoints(ammo?.rangeModifiers ?? [])) distances.add(point.distance);
  return [...distances].filter((distance) => distance >= 0).sort((a, b) => a - b);
}

function buildDamageCurve(weapon: WeaponStat, ammo: AmmoStat | undefined): DamagePoint[] {
  return curveDistances(weapon, ammo).map((distance) => ({
    distance,
    damage: damageAtDistance(weapon, ammo, distance),
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

function DamageChart({
  weapon,
  ammo,
  selectedDistance,
}: {
  weapon: WeaponStat;
  ammo: AmmoStat | undefined;
  selectedDistance: number;
}) {
  const points = useMemo(() => buildDamageCurve(weapon, ammo), [ammo, weapon]);
  const headshotMultiplier = primaryMultiplier(weapon.headshotMultiplier);
  const headshotPoints = points.map((point) => ({
    distance: point.distance,
    damage: point.damage * headshotMultiplier,
  }));
  const maxDistance = Math.max(...points.map((point) => point.distance), 300);
  const maxDamage = Math.max(...headshotPoints.map((point) => point.damage), ...points.map((point) => point.damage), 1);

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
  const selectedDamage = damageAtDistance(weapon, ammo, selectedDistance);
  const selectedHeadshotDamage = selectedDamage * headshotMultiplier;
  const path = points.map((point) => `${x(point.distance)},${y(point.damage)}`).join(" ");
  const headshotPath = headshotPoints.map((point) => `${x(point.distance)},${y(point.damage)}`).join(" ");
  const ticks = [...new Set([0, Math.round(maxDamage / 2), Math.round(maxDamage)])].sort((a, b) => a - b);

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
  onSelectAmmo,
}: {
  weapon: WeaponStat;
  ammoRows: AmmoStat[];
  selectedAmmoId: string;
  selectedDistance: number;
  onSelectAmmo: (id: string) => void;
}) {
  return (
    <TableContainer sx={{ maxHeight: 360 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>弾</TableCell>
            <TableCell align="right">基礎</TableCell>
            <TableCell align="right">{selectedDistance}m</TableCell>
            <TableCell align="right">ヘッドショット {selectedDistance}m</TableCell>
            <TableCell>補足</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ammoRows.map((ammo) => (
            <TableRow
              hover
              selected={ammo.itemId === selectedAmmoId}
              key={ammo.itemId}
              onClick={() => onSelectAmmo(ammo.itemId)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell sx={{ minWidth: 220 }}>
                <Typography fontWeight={700}>{displayName(ammo.niceName, ammo.itemId)}</Typography>
                <Typography variant="caption" color="text.secondary">{ammo.rarity || "UNKNOWN"}</Typography>
              </TableCell>
              <TableCell align="right">{formatDamage(totalDamage(ammo.damageParts))}</TableCell>
              <TableCell align="right">{formatDamage(damageAtDistance(weapon, ammo, selectedDistance))}</TableCell>
              <TableCell align="right">
                {formatDamage(damageAtDistance(weapon, ammo, selectedDistance) * primaryMultiplier(weapon.headshotMultiplier))}
              </TableCell>
              <TableCell>{ammo.customProjectile || "-"}</TableCell>
            </TableRow>
          ))}
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
  const [selectedDistance, setSelectedDistance] = useState(50);

  const ammoById = useMemo(() => new Map(ammoStats.map((ammo) => [ammo.itemId, ammo])), []);
  const projectileByName = useMemo(
    () => new Map(projectileStats.map((projectile) => [projectile.projectileName, projectile])),
    [],
  );

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
  const selectedDamage = damageAtDistance(selectedWeapon, selectedAmmo, selectedDistance);
  const selectedHeadshotMultiplier = primaryMultiplier(selectedWeapon.headshotMultiplier);
  const selectedHeadshotDamage = selectedDamage * selectedHeadshotMultiplier;
  const baseDamage = selectedAmmo ? totalDamage(selectedAmmo.damageParts) : 0;
  const weaponDamage = totalDamage(selectedWeapon.damageParts);

  function handleWeaponChange(event: SelectChangeEvent) {
    setSelectedWeaponId(event.target.value);
    setSelectedAmmoId("");
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
                renderValue={() => displayName(selectedWeapon.niceName, selectedWeapon.itemId)}
              >
                {selectableWeapons.map((weapon) => (
                  <MenuItem key={weapon.itemId} value={weapon.itemId}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <WeaponIcon weapon={weapon} size={34} />
                      <Box>
                        <Typography>{displayName(weapon.niceName, weapon.itemId)}</Typography>
                        <Typography variant="caption" color="text.secondary">{weapon.category}</Typography>
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
                onChange={(event) => setSelectedAmmoId(event.target.value)}
                renderValue={() => selectedAmmo ? displayName(selectedAmmo.niceName, selectedAmmo.itemId) : ""}
              >
                {ammoRows.map((ammo) => (
                  <MenuItem key={ammo.itemId} value={ammo.itemId}>
                    <Box>
                      <Typography>{displayName(ammo.niceName, ammo.itemId)}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        基礎 {formatDamage(totalDamage(ammo.damageParts))}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
                <Typography variant="h2">{displayName(selectedWeapon.niceName, selectedWeapon.itemId)}</Typography>
                <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mt: 0.75 }}>
                  <CategoryBadge weapon={selectedWeapon} />
                  <Chip label={selectedWeapon.rarity || "UNKNOWN"} size="small" color={rarityColors[selectedWeapon.rarity] ?? "default"} />
                </Stack>
              </Box>
            </Stack>

            <Divider />

            <Box>
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
                <Typography variant="caption" color="text.secondary">弾の基礎ダメージ</Typography>
                <Typography>{formatDamage(baseDamage)}</Typography>
              </Box>
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
              <Typography variant="caption" color="text.secondary">ダメージ内訳</Typography>
              <DamageBreakdown parts={selectedAmmo?.damageParts ?? []} />
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
                {displayName(selectedAmmo?.niceName ?? "", selectedAmmo?.itemId ?? "")}
              </Typography>
            </Stack>
            <DamageChart weapon={selectedWeapon} ammo={selectedAmmo} selectedDistance={selectedDistance} />
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
