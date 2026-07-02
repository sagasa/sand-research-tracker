import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FlagIcon from "@mui/icons-material/Flag";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ScienceIcon from "@mui/icons-material/Science";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { loadStateFromCookie, saveStateToCookie, type CookieSaveResult } from "./cookieStorage";
import { techBranches, techNodes, techTreeSource } from "./generated/techTreeData";
import { computeMaterialSummaries, defaultTrackerState, formatNumber, normalizeTrackerState } from "./tracker";
import type { MaterialSummary, TechNode, TrackerState } from "./types";

function toggleId(values: string[], id: string): string[] {
  return values.includes(id) ? values.filter((value) => value !== id) : [...values, id];
}

function exportJson(state: TrackerState) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "sand-research-tracker-state.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function branchLabel(node: TechNode) {
  return `${node.branch} / ${node.tierLabel}`;
}

function materialText(node: TechNode) {
  if (node.materials.length === 0) return "素材なし";
  return node.materials.map((material) => `${formatNumber(material.count)} ${material.name}`).join(", ");
}

function nodeMatchesSearch(node: TechNode, search: string) {
  if (!search) return true;
  const query = search.toLowerCase();
  return [
    node.name,
    node.branch,
    node.category,
    node.tierLabel,
    ...node.materials.map((material) => material.name),
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function StatTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <Paper variant="outlined" sx={{ p: 1.5, minHeight: 82 }}>
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box sx={{ color: "primary.main", display: "flex" }}>{icon}</Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h2">{value}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

function MaterialSummaryTable({
  summaries,
  nodesById,
  inventory,
  onInventoryChange,
}: {
  summaries: MaterialSummary[];
  nodesById: Map<string, TechNode>;
  inventory: Record<string, number>;
  onInventoryChange: (name: string, count: number) => void;
}) {
  if (summaries.length === 0) {
    return (
      <Alert severity="info" variant="outlined">
        目標ノードを選ぶと、クラウンを除いた必要素材がここに集計されます。
      </Alert>
    );
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>素材</TableCell>
            <TableCell align="right">必要</TableCell>
            <TableCell align="right">所持</TableCell>
            <TableCell align="right">残り</TableCell>
            <TableCell>進捗</TableCell>
            <TableCell>対象ノード</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summaries.map((summary) => {
            const progress =
              summary.required === 0 ? 100 : Math.min(100, (summary.owned / summary.required) * 100);
            const complete = summary.remaining === 0;

            return (
              <TableRow key={summary.name} className="node-table-row">
                <TableCell sx={{ minWidth: 220 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {complete ? <CheckCircleOutlineIcon color="success" fontSize="small" /> : null}
                    <Typography fontWeight={700}>{summary.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right">{formatNumber(summary.required)}</TableCell>
                <TableCell align="right" sx={{ width: 120 }}>
                  <TextField
                    type="number"
                    value={inventory[summary.name] ?? 0}
                    inputProps={{ min: 0, inputMode: "numeric" }}
                    onChange={(event) =>
                      onInventoryChange(summary.name, Number.parseInt(event.target.value || "0", 10))
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography color={complete ? "success.main" : "warning.main"} fontWeight={700}>
                    {formatNumber(summary.remaining)}
                  </Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 180 }}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    color={complete ? "success" : "primary"}
                    sx={{ height: 8, borderRadius: 1 }}
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: 340 }}>
                  <Typography variant="body2" color="text.secondary">
                    {summary.nodeIds
                      .map((nodeId) => nodesById.get(nodeId)?.name)
                      .filter(Boolean)
                      .join(", ")}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function NodeTable({
  nodes,
  targetIds,
  unlockedIds,
  onToggleTarget,
  onToggleUnlocked,
}: {
  nodes: TechNode[];
  targetIds: Set<string>;
  unlockedIds: Set<string>;
  onToggleTarget: (id: string) => void;
  onToggleUnlocked: (id: string) => void;
}) {
  return (
    <TableContainer sx={{ maxHeight: 680 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">目標</TableCell>
            <TableCell padding="checkbox">済</TableCell>
            <TableCell>研究ノード</TableCell>
            <TableCell>系統</TableCell>
            <TableCell align="right">Crowns</TableCell>
            <TableCell>必要素材</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodes.map((node) => {
            const target = targetIds.has(node.id);
            const unlocked = unlockedIds.has(node.id);

            return (
              <TableRow
                key={node.id}
                hover
                selected={target}
                className="node-table-row"
                sx={{
                  opacity: unlocked ? 0.58 : 1,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(95, 179, 255, 0.11)",
                  },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={target} onChange={() => onToggleTarget(node.id)} />
                </TableCell>
                <TableCell padding="checkbox">
                  <Checkbox checked={unlocked} onChange={() => onToggleUnlocked(node.id)} />
                </TableCell>
                <TableCell sx={{ minWidth: 230 }}>
                  <Stack spacing={0.6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        label={node.category}
                        size="small"
                        sx={{ borderColor: node.branchColor, color: node.branchColor }}
                        variant="outlined"
                      />
                      <Typography fontWeight={700}>{node.name}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell sx={{ minWidth: 220 }}>
                  <Typography variant="body2">{branchLabel(node)}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {node.tierCostRange}
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {formatNumber(node.crowns)}
                </TableCell>
                <TableCell sx={{ minWidth: 320 }}>
                  <Box className="material-chip-list">
                    {node.materials.length === 0 ? (
                      <Chip label="素材なし" size="small" variant="outlined" />
                    ) : (
                      node.materials.map((material) => (
                        <Tooltip title={node.name} key={`${node.id}-${material.name}`}>
                          <Chip
                            label={`${formatNumber(material.count)} ${material.name}`}
                            size="small"
                            variant="outlined"
                          />
                        </Tooltip>
                      ))
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function App() {
  const [state, setState] = useState<TrackerState>(() =>
    normalizeTrackerState(loadStateFromCookie(defaultTrackerState)),
  );
  const [cookieResult, setCookieResult] = useState<CookieSaveResult>({
    ok: true,
    bytes: 0,
    chunks: 0,
  });

  const nodesById = useMemo(() => new Map(techNodes.map((node) => [node.id, node])), []);
  const validNodeIds = useMemo(() => new Set(techNodes.map((node) => node.id)), []);

  const targetNodeIds = useMemo(
    () => state.targetNodeIds.filter((id) => validNodeIds.has(id)),
    [state.targetNodeIds, validNodeIds],
  );
  const unlockedNodeIds = useMemo(
    () => state.unlockedNodeIds.filter((id) => validNodeIds.has(id)),
    [state.unlockedNodeIds, validNodeIds],
  );
  const targetIds = useMemo(() => new Set(targetNodeIds), [targetNodeIds]);
  const unlockedIds = useMemo(() => new Set(unlockedNodeIds), [unlockedNodeIds]);
  const activeTargetNodeIds = useMemo(
    () => (state.hideUnlocked ? targetNodeIds.filter((id) => !unlockedIds.has(id)) : targetNodeIds),
    [state.hideUnlocked, targetNodeIds, unlockedIds],
  );

  const summaries = useMemo(
    () => computeMaterialSummaries(techNodes, activeTargetNodeIds, state.inventory),
    [activeTargetNodeIds, state.inventory],
  );

  const filteredNodes = useMemo(
    () =>
      techNodes.filter((node) => {
        if (state.branch !== "all" && node.branchSlug !== state.branch) return false;
        if (state.tier !== "all" && node.tier !== state.tier) return false;
        return nodeMatchesSearch(node, state.search);
      }),
    [state.branch, state.search, state.tier],
  );

  const totals = useMemo(
    () => ({
      required: summaries.reduce((sum, item) => sum + item.required, 0),
      remaining: summaries.reduce((sum, item) => sum + item.remaining, 0),
      completeMaterials: summaries.filter((item) => item.remaining === 0).length,
    }),
    [summaries],
  );

  useEffect(() => {
    setCookieResult(saveStateToCookie(state));
  }, [state]);

  function patchState(patch: Partial<TrackerState>) {
    setState((current) => normalizeTrackerState({ ...current, ...patch }));
  }

  function toggleTarget(id: string) {
    patchState({ targetNodeIds: toggleId(targetNodeIds, id) });
  }

  function toggleUnlocked(id: string) {
    patchState({ unlockedNodeIds: toggleId(unlockedNodeIds, id) });
  }

  function updateInventory(name: string, count: number) {
    setState((current) => {
      const nextInventory = { ...current.inventory };
      if (Number.isFinite(count) && count > 0) {
        nextInventory[name] = count;
      } else {
        delete nextInventory[name];
      }
      return normalizeTrackerState({ ...current, inventory: nextInventory });
    });
  }

  function handleBranchChange(event: SelectChangeEvent) {
    patchState({ branch: event.target.value });
  }

  function handleTierChange(event: SelectChangeEvent<string>) {
    const value = event.target.value;
    patchState({ tier: value === "all" ? "all" : Number.parseInt(value, 10) });
  }

  function handleImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(String(reader.result));
        setState(normalizeTrackerState(imported));
      } catch {
        window.alert("JSONを読み込めませんでした。");
      }
    };
    reader.readAsText(file, "utf-8");
    event.target.value = "";
  }

  function resetState() {
    if (window.confirm("進捗と所持数をリセットしますか。")) {
      setState(defaultTrackerState);
    }
  }

  const generatedAt = String(techTreeSource.generatedAt);
  const generatedDate =
    generatedAt === "pending" ? "未生成" : new Date(generatedAt).toLocaleString("ja-JP");

  return (
    <Box>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: "blur(12px)" }}>
        <Toolbar sx={{ gap: 2, flexWrap: "wrap" }}>
          <ScienceIcon color="primary" />
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <Typography variant="h1">SAND Research Resource Tracker</Typography>
            <Typography variant="caption" color="text.secondary">
              data: {techNodes.length} nodes / generated {generatedDate}
            </Typography>
          </Box>
          <Button startIcon={<DownloadIcon />} onClick={() => exportJson(state)}>
            Export
          </Button>
          <Button component="label" startIcon={<UploadFileIcon />}>
            Import
            <input hidden type="file" accept="application/json,.json" onChange={handleImport} />
          </Button>
          <Button startIcon={<RestartAltIcon />} color="warning" onClick={resetState}>
            Reset
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} sx={{ py: 3 }}>
        <Stack spacing={2.5}>
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
            <StatTile icon={<FlagIcon />} label="目標ノード" value={targetNodeIds.length} />
            <StatTile icon={<CheckCircleOutlineIcon />} label="集計対象ノード" value={activeTargetNodeIds.length} />
            <StatTile icon={<Inventory2Icon />} label="必要素材種" value={summaries.length} />
            <StatTile icon={<FilterAltIcon />} label="残り素材数" value={formatNumber(totals.remaining)} />
          </Box>

          {!cookieResult.ok ? (
            <Alert severity="warning" variant="outlined">
              Cookie保存に失敗しました: {cookieResult.error}
            </Alert>
          ) : (
            <Alert severity="success" variant="outlined">
              Cookie保存中: {formatNumber(cookieResult.bytes)} bytes / {cookieResult.chunks} chunks
            </Alert>
          )}

          <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={1.5}
              alignItems={{ xs: "stretch", lg: "center" }}
            >
              <TextField
                label="Search"
                value={state.search}
                onChange={(event) => patchState({ search: event.target.value })}
                sx={{ minWidth: { xs: "100%", lg: 320 } }}
              />
              <FormControl sx={{ minWidth: 220 }}>
                <InputLabel id="branch-filter-label">Branch</InputLabel>
                <Select
                  labelId="branch-filter-label"
                  label="Branch"
                  value={state.branch}
                  onChange={handleBranchChange}
                >
                  <MenuItem value="all">All branches</MenuItem>
                  {techBranches.map((branch) => (
                    <MenuItem value={branch.slug} key={branch.slug}>
                      {branch.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel id="tier-filter-label">Tier</InputLabel>
                <Select
                  labelId="tier-filter-label"
                  label="Tier"
                  value={String(state.tier)}
                  onChange={handleTierChange}
                >
                  <MenuItem value="all">All tiers</MenuItem>
                  {[1, 2, 3, 4].map((tier) => (
                    <MenuItem value={String(tier)} key={tier}>
                      Tier {tier}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.hideUnlocked}
                    onChange={(event) => patchState({ hideUnlocked: event.target.checked })}
                  />
                }
                label="研究済みを集計から除外"
              />
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
                <Inventory2Icon color="primary" />
                <Typography variant="h2">必要素材</Typography>
                <Chip label={`required ${formatNumber(totals.required)}`} size="small" />
                <Chip label={`complete ${totals.completeMaterials}/${summaries.length}`} size="small" />
              </Stack>
              <Divider />
              <MaterialSummaryTable
                summaries={summaries}
                nodesById={nodesById}
                inventory={state.inventory}
                onInventoryChange={updateInventory}
              />
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
                <FlagIcon color="primary" />
                <Typography variant="h2">研究ノード</Typography>
                <Chip label={`${filteredNodes.length}/${techNodes.length}`} size="small" />
                <Chip label="Crowns excluded from material totals" size="small" variant="outlined" />
              </Stack>
              <Divider />
              {techNodes.length === 0 ? (
                <Alert severity="warning" variant="outlined">
                  研究ツリーデータが未生成です。`npm run generate:data` を実行してください。
                </Alert>
              ) : (
                <NodeTable
                  nodes={filteredNodes}
                  targetIds={targetIds}
                  unlockedIds={unlockedIds}
                  onToggleTarget={toggleTarget}
                  onToggleUnlocked={toggleUnlocked}
                />
              )}
            </Stack>
          </Paper>

          {targetNodeIds.length > 0 ? (
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h2" gutterBottom>
                目標ノード内訳
              </Typography>
              <Stack spacing={1}>
                {targetNodeIds.map((nodeId) => {
                  const node = nodesById.get(nodeId);
                  if (!node) return null;
                  const excluded = state.hideUnlocked && unlockedIds.has(node.id);
                  return (
                    <Stack
                      key={node.id}
                      direction={{ xs: "column", md: "row" }}
                      spacing={1}
                      alignItems={{ xs: "stretch", md: "center" }}
                      sx={{ opacity: excluded ? 0.56 : 1 }}
                    >
                      <Chip
                        label={excluded ? "excluded" : "active"}
                        color={excluded ? "default" : "primary"}
                        size="small"
                      />
                      <Typography fontWeight={700} sx={{ minWidth: 220 }}>
                        {node.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                        {branchLabel(node)} / {materialText(node)}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Paper>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
