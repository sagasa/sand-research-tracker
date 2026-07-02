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
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ScienceIcon from "@mui/icons-material/Science";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { ammoStats, armorStats, equipmentStatsSource, projectileStats, weaponStats } from "../../generated/equipmentStatsData";
import { formatNumber } from "../../tracker";
import type { AmmoStat, ArmorStat, DamagePart, RangeModifierPoint, StateNumberMap, WeaponStat } from "../../types";

type FalloffSeries = {
  label: string;
  color: string;
  points: Array<{ distance: number; modifier: number }>;
};

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

function damageText(parts: DamagePart[]) {
  if (parts.length === 0) return "no damage data";
  return parts.map((part) => `${part.type} ${formatNumber(part.amount)}`).join(" / ");
}

function stateMapText(value: StateNumberMap) {
  const entries = Object.entries(value);
  if (entries.length === 0) return "-";
  return entries.map(([key, amount]) => `${key} ${amount}x`).join(" / ");
}

function primaryMultiplier(value: StateNumberMap, fallback = 1) {
  if (typeof value.all === "number") return value.all;
  if (typeof value.scope === "number") return value.scope;
  const values = Object.values(value).filter(Number.isFinite);
  return values.length > 0 ? Math.max(...values) : fallback;
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

function buildFalloffSeries(weapon: WeaponStat, ammo: AmmoStat | undefined): FalloffSeries[] {
  const distances = new Set<number>([0]);
  for (const point of numericRangePoints(weapon.weaponRangeModifiers)) distances.add(point.distance);
  for (const point of numericRangePoints(ammo?.rangeModifiers ?? [])) distances.add(point.distance);
  const orderedDistances = [...distances].sort((a, b) => a - b);
  if (orderedDistances.length <= 1) return [];

  return [
    {
      label: "weapon",
      color: "#5fb3ff",
      points: orderedDistances.map((distance) => ({
        distance,
        modifier: modifierAt(weapon.weaponRangeModifiers, distance),
      })),
    },
    {
      label: "ammo",
      color: "#ffb15f",
      points: orderedDistances.map((distance) => ({
        distance,
        modifier: modifierAt(ammo?.rangeModifiers ?? [], distance),
      })),
    },
    {
      label: "combined",
      color: "#78d389",
      points: orderedDistances.map((distance) => ({
        distance,
        modifier:
          modifierAt(weapon.weaponRangeModifiers, distance) *
          modifierAt(ammo?.rangeModifiers ?? [], distance),
      })),
    },
  ];
}

function rangeText(points: RangeModifierPoint[]) {
  if (points.length === 0) return "-";
  return points.map((point) => `${point.distance ?? "?"}m:${point.modifier}x`).join(" / ");
}

function CategoryBadge({ weapon }: { weapon: WeaponStat }) {
  const icon =
    weapon.category === "sniper" || weapon.category === "rifle" ? (
      <TrackChangesIcon fontSize="small" />
    ) : weapon.category === "explosive/special" ? (
      <ScienceIcon fontSize="small" />
    ) : (
      <GpsFixedIcon fontSize="small" />
    );

  return (
    <Chip
      icon={icon}
      label={weapon.category}
      size="small"
      variant="outlined"
      sx={{ minWidth: 132, justifyContent: "flex-start" }}
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

function FalloffChart({
  weapon,
  ammo,
  selectedDistance,
}: {
  weapon: WeaponStat;
  ammo: AmmoStat | undefined;
  selectedDistance: number;
}) {
  const series = useMemo(() => buildFalloffSeries(weapon, ammo), [ammo, weapon]);
  if (series.length === 0) {
    return (
      <Alert severity="info" variant="outlined">
        この組み合わせにはグラフ化できる距離倍率がありません。
      </Alert>
    );
  }

  const width = 680;
  const height = 260;
  const padding = 36;
  const maxDistance = Math.max(...series.flatMap((item) => item.points.map((point) => point.distance)), 1);
  const maxModifier = Math.max(...series.flatMap((item) => item.points.map((point) => point.modifier)), 1);
  const x = (distance: number) => padding + (distance / maxDistance) * (width - padding * 1.35);
  const y = (modifier: number) =>
    height - padding - (modifier / maxModifier) * (height - padding * 1.5);
  const markerX = x(Math.min(selectedDistance, maxDistance));

  return (
    <Box sx={{ overflowX: "auto" }}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="distance falloff chart">
        <line x1={padding} y1={height - padding} x2={width - padding / 2} y2={height - padding} stroke="#65717c" />
        <line x1={padding} y1={padding / 2} x2={padding} y2={height - padding} stroke="#65717c" />
        <line x1={markerX} y1={padding / 2} x2={markerX} y2={height - padding} stroke="#b7c2cc" strokeDasharray="5 5" />
        {[0, maxDistance].map((distance) => (
          <text key={distance} x={x(distance)} y={height - 10} fill="#9aa4ad" fontSize="12" textAnchor="middle">
            {formatNumber(distance)}m
          </text>
        ))}
        {[1, maxModifier].map((modifier) => (
          <text key={modifier} x={8} y={y(modifier) + 4} fill="#9aa4ad" fontSize="12">
            {modifier.toFixed(2)}x
          </text>
        ))}
        {series.map((item) => (
          <polyline
            key={item.label}
            fill="none"
            stroke={item.color}
            strokeWidth="3"
            points={item.points.map((point) => `${x(point.distance)},${y(point.modifier)}`).join(" ")}
          />
        ))}
      </svg>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
        {series.map((item) => (
          <Chip
            key={item.label}
            label={`${item.label}: ${item.points[item.points.length - 1].modifier.toFixed(2)}x at max`}
            size="small"
            sx={{ borderColor: item.color, color: item.color }}
            variant="outlined"
          />
        ))}
      </Stack>
    </Box>
  );
}

function AmmoDamageTable({
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
  const weaponHeadshot = primaryMultiplier(weapon.headshotMultiplier);

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>弾薬</TableCell>
            <TableCell>ダメージ</TableCell>
            <TableCell align="right">Body @{selectedDistance}m</TableCell>
            <TableCell align="right">Head @{selectedDistance}m</TableCell>
            <TableCell>距離倍率</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ammoRows.map((ammo) => {
            const baseDamage = totalDamage(ammo.damageParts);
            const rangeModifier =
              modifierAt(weapon.weaponRangeModifiers, selectedDistance) *
              modifierAt(ammo.rangeModifiers, selectedDistance);
            const bodyDamage = baseDamage * rangeModifier;
            const headDamage = bodyDamage * weaponHeadshot;

            return (
              <TableRow
                hover
                selected={ammo.itemId === selectedAmmoId}
                key={ammo.itemId}
                onClick={() => onSelectAmmo(ammo.itemId)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell sx={{ minWidth: 220 }}>
                  <Stack spacing={0.5}>
                    <Typography fontWeight={700}>{displayName(ammo.niceName, ammo.itemId)}</Typography>
                    <Stack direction="row" spacing={0.75} flexWrap="wrap">
                      <Chip label={ammo.rarity || "UNKNOWN"} size="small" color={rarityColors[ammo.rarity] ?? "default"} />
                      {ammo.customProjectile ? <Chip label={ammo.customProjectile} size="small" variant="outlined" /> : null}
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>{damageText(ammo.damageParts)}</TableCell>
                <TableCell align="right">{bodyDamage ? bodyDamage.toFixed(1) : "-"}</TableCell>
                <TableCell align="right">{headDamage ? headDamage.toFixed(1) : "-"}</TableCell>
                <TableCell sx={{ minWidth: 260 }}>{rangeText(ammo.rangeModifiers)}</TableCell>
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
            <TableCell>エントリ</TableCell>
            <TableCell align="right">値</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell>対象</TableCell>
            <TableCell align="right">Regen</TableCell>
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
                {row.templateChain.length > 0 ? (
                  <Typography variant="caption" color="text.secondary">
                    template: {row.templateChain.join(" / ")}
                  </Typography>
                ) : null}
              </TableCell>
              <TableCell align="right">{row.healthValue ?? "-"}</TableCell>
              <TableCell align="right">{row.healthCount ?? "-"}</TableCell>
              <TableCell>{row.damageMasks.join(" / ") || "-"}</TableCell>
              <TableCell align="right">
                {row.regenDelay !== null || row.regenSpeed !== null
                  ? `${row.regenDelay ?? "-"}s / ${row.regenSpeed ?? "-"}`
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function EquipmentStatsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedWeaponId, setSelectedWeaponId] = useState(weaponStats[0]?.itemId ?? "");
  const [selectedAmmoId, setSelectedAmmoId] = useState("");
  const [selectedDistance, setSelectedDistance] = useState(50);

  const categories = useMemo(() => [...new Set(weaponStats.map((weapon) => weapon.category))].sort(), []);
  const ammoById = useMemo(() => new Map(ammoStats.map((ammo) => [ammo.itemId, ammo])), []);
  const projectileByName = useMemo(
    () => new Map(projectileStats.map((projectile) => [projectile.projectileName, projectile])),
    [],
  );

  const filteredWeapons = useMemo(() => {
    const query = search.toLowerCase();
    return weaponStats.filter((weapon) => {
      if (category !== "all" && weapon.category !== category) return false;
      if (!query) return true;
      return [
        weapon.itemId,
        weapon.niceName,
        weapon.category,
        weapon.rarity,
        weapon.iconName,
        ...weapon.ammoTypeIds,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [category, search]);

  const selectedWeapon =
    weaponStats.find((weapon) => weapon.itemId === selectedWeaponId) ?? filteredWeapons[0] ?? weaponStats[0];
  const compatibleAmmo = selectedWeapon.ammoTypeIds
    .map((ammoId) => ammoById.get(ammoId))
    .filter((ammo): ammo is AmmoStat => Boolean(ammo));
  const ammoRows = compatibleAmmo.length > 0 ? compatibleAmmo : ammoStats;
  const selectedAmmo =
    ammoRows.find((ammo) => ammo.itemId === selectedAmmoId) ?? ammoRows[0];
  const selectedProjectile = selectedAmmo?.customProjectile
    ? projectileByName.get(selectedAmmo.customProjectile)
    : undefined;
  const selectedHeadshot = primaryMultiplier(selectedWeapon.headshotMultiplier);

  function handleCategoryChange(event: SelectChangeEvent) {
    setCategory(event.target.value);
  }

  function handleWeaponChange(event: SelectChangeEvent) {
    setSelectedWeaponId(event.target.value);
    setSelectedAmmoId("");
  }

  return (
    <Stack spacing={2.5}>
      <Alert severity="info" variant="outlined">
        ローカル参考データから生成した数値ビューです。距離倍率とヘッドショット倍率はダメージ計算メモに基づく表示です。
      </Alert>

      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
        }}
      >
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="caption" color="text.secondary">武器</Typography>
          <Typography variant="h2">{weaponStats.length}</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="caption" color="text.secondary">弾薬</Typography>
          <Typography variant="h2">{ammoStats.length}</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="caption" color="text.secondary">Armor / HP rows</Typography>
          <Typography variant="h2">{armorStats.length}</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 1.5 }}>
          <Typography variant="caption" color="text.secondary">選択中HS倍率</Typography>
          <Typography variant="h2">{selectedHeadshot}x</Typography>
        </Paper>
      </Box>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          <Stack direction={{ xs: "column", lg: "row" }} spacing={1.5}>
            <TextField
              label="Weapon search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              sx={{ minWidth: { xs: "100%", lg: 320 } }}
            />
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="equipment-category-label">Category</InputLabel>
              <Select
                labelId="equipment-category-label"
                label="Category"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="all">All categories</MenuItem>
                {categories.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: { xs: "100%", lg: 360 } }}>
              <InputLabel id="weapon-select-label">Selected weapon</InputLabel>
              <Select
                labelId="weapon-select-label"
                label="Selected weapon"
                value={selectedWeapon.itemId}
                onChange={handleWeaponChange}
              >
                {filteredWeapons.map((weapon) => (
                  <MenuItem key={weapon.itemId} value={weapon.itemId}>
                    {displayName(weapon.niceName, weapon.itemId)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            source: {equipmentStatsSource.sourceFiles.join(" / ")}
          </Typography>
        </Stack>
      </Paper>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "0.9fr 1.1fr" }, gap: 2 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
              <WeaponIcon weapon={selectedWeapon} size={58} />
              <CategoryBadge weapon={selectedWeapon} />
              <Typography variant="h2">{displayName(selectedWeapon.niceName, selectedWeapon.itemId)}</Typography>
              <Chip label={selectedWeapon.rarity || "UNKNOWN"} size="small" color={rarityColors[selectedWeapon.rarity] ?? "default"} />
            </Stack>
            <Divider />
            <Box className="stat-pair-grid">
              <Box>
                <Typography variant="caption" color="text.secondary">Item ID</Typography>
                <Typography>{selectedWeapon.itemId}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Clip</Typography>
                <Typography>{selectedWeapon.clipSize ?? "-"}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Headshot</Typography>
                <Typography>{stateMapText(selectedWeapon.headshotMultiplier)}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Magnification</Typography>
                <Typography>{stateMapText(selectedWeapon.magnification)}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Weapon damage</Typography>
                <Typography>{damageText(selectedWeapon.damageParts)}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Weapon range</Typography>
                <Typography>{rangeText(selectedWeapon.weaponRangeModifiers)}</Typography>
              </Box>
            </Box>
            <Divider />
            <TableContainer sx={{ maxHeight: 360 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>武器</TableCell>
                    <TableCell>種別</TableCell>
                    <TableCell align="right">Clip</TableCell>
                    <TableCell align="right">HS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredWeapons.map((weapon) => (
                    <TableRow
                      hover
                      key={weapon.itemId}
                      selected={weapon.itemId === selectedWeapon.itemId}
                      onClick={() => {
                        setSelectedWeaponId(weapon.itemId);
                        setSelectedAmmoId("");
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <WeaponIcon weapon={weapon} size={36} />
                          <Box>
                            <Typography fontWeight={700}>{displayName(weapon.niceName, weapon.itemId)}</Typography>
                            <Typography variant="caption" color="text.secondary">{weapon.itemId}</Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell><CategoryBadge weapon={weapon} /></TableCell>
                      <TableCell align="right">{weapon.clipSize ?? "-"}</TableCell>
                      <TableCell align="right">{primaryMultiplier(weapon.headshotMultiplier, 0) || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
              <SpeedIcon color="primary" />
              <Typography variant="h2">距離減衰と弾薬ダメージ</Typography>
              <Chip label={`${ammoRows.length} compatible ammo`} size="small" />
            </Stack>
            <FormControl sx={{ maxWidth: 420 }}>
              <InputLabel id="ammo-select-label">Selected ammo</InputLabel>
              <Select
                labelId="ammo-select-label"
                label="Selected ammo"
                value={selectedAmmo?.itemId ?? ""}
                onChange={(event) => setSelectedAmmoId(event.target.value)}
              >
                {ammoRows.map((ammo) => (
                  <MenuItem key={ammo.itemId} value={ammo.itemId}>
                    {displayName(ammo.niceName, ammo.itemId)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              <Typography variant="caption" color="text.secondary">Distance: {selectedDistance}m</Typography>
              <Slider
                min={0}
                max={300}
                step={5}
                value={selectedDistance}
                valueLabelDisplay="auto"
                onChange={(_event, value) => setSelectedDistance(Array.isArray(value) ? value[0] : value)}
              />
            </Box>
            <FalloffChart weapon={selectedWeapon} ammo={selectedAmmo} selectedDistance={selectedDistance} />
            {selectedProjectile ? (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Tooltip title="Custom projectile from selected ammo">
                  <Chip label={selectedProjectile.projectileName} size="small" color="primary" />
                </Tooltip>
                <Chip label={`velocity ${selectedProjectile.velocity ?? "-"}`} size="small" variant="outlined" />
                <Chip label={`gravity ${selectedProjectile.gravity ?? "-"}`} size="small" variant="outlined" />
                <Chip label={`auto destroy ${selectedProjectile.autoDestroy ?? "-"}`} size="small" variant="outlined" />
              </Stack>
            ) : null}
            <Divider />
            <AmmoDamageTable
              weapon={selectedWeapon}
              ammoRows={ammoRows}
              selectedAmmoId={selectedAmmo?.itemId ?? ""}
              selectedDistance={selectedDistance}
              onSelectAmmo={setSelectedAmmoId}
            />
          </Stack>
        </Paper>
      </Box>

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
