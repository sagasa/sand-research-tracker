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
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
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
import { EquipmentStatsPage } from "./features/equipment/EquipmentStatsPage";
import { techBranches, techNodes, techTreeSource } from "./generated/techTreeData";
import {
  collectPrerequisiteClosure,
  getDirectMissingRequirementIds,
  getRequiredNodeIds,
  getResearchDepth,
  getUnknownRequirementIds,
  hasExplicitResearchDependencies,
} from "./researchGraph";
import { computeMaterialSummaries, defaultTrackerState, formatNumber, normalizeTrackerState } from "./tracker";
import type { MaterialSummary, TechNode, TrackerState } from "./types";

type AppTab = "research" | "equipment";

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

function researchNodeName(node: TechNode) {
  return node.displayNameJa || node.name;
}

function researchNodeSecondaryName(node: TechNode) {
  const displayName = researchNodeName(node);
  return displayName !== node.name ? node.name : "";
}

function materialText(node: TechNode) {
  if (node.materials.length === 0) return "素材なし";
  return node.materials.map((material) => `${formatNumber(material.count)} ${material.name}`).join(", ");
}

function shortMaterialText(node: TechNode) {
  if (node.materials.length === 0) return "素材なし";
  const visible = node.materials.slice(0, 3).map((material) => `${formatNumber(material.count)} ${material.name}`);
  if (node.materials.length > 3) visible.push(`+${node.materials.length - 3}`);
  return visible.join(" / ");
}

function nodeMatchesSearch(node: TechNode, search: string) {
  if (!search) return true;
  const query = search.toLowerCase();
  return [
    node.displayNameJa,
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
                      .map((nodeId) => {
                        const node = nodesById.get(nodeId);
                        return node ? researchNodeName(node) : "";
                      })
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

function ResearchNodeCard({
  node,
  target,
  unlocked,
  nodesById,
  unlockedIds,
  dependencyDataAvailable,
  onToggleTarget,
  onToggleUnlocked,
}: {
  node: TechNode;
  target: boolean;
  unlocked: boolean;
  nodesById: Map<string, TechNode>;
  unlockedIds: Set<string>;
  dependencyDataAvailable: boolean;
  onToggleTarget: (id: string) => void;
  onToggleUnlocked: (id: string) => void;
}) {
  const requiredIds = getRequiredNodeIds(node);
  const missingRequirementIds = getDirectMissingRequirementIds(node, unlockedIds, nodesById);
  const unknownRequirementIds = getUnknownRequirementIds(node, nodesById);

  return (
    <Box
      className="research-node-card"
      sx={{
        position: "relative",
        p: 1.15,
        minHeight: dependencyDataAvailable ? 178 : 142,
        border: "1px solid",
        borderColor:
          target ? node.branchColor : missingRequirementIds.length > 0 ? "warning.main" : "rgba(255,255,255,0.13)",
        borderRadius: 1,
        backgroundColor: target ? `${node.branchColor}1f` : "rgba(255,255,255,0.035)",
        boxShadow: target ? `0 0 0 1px ${node.branchColor}33 inset` : "none",
        opacity: unlocked ? 0.48 : 1,
        transition: "border-color 140ms ease, background-color 140ms ease, opacity 140ms ease",
      }}
    >
      <Stack spacing={1}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <Chip
            label={node.category}
            size="small"
            sx={{ borderColor: node.branchColor, color: node.branchColor, maxWidth: 142 }}
            variant="outlined"
          />
          <Box sx={{ flex: 1 }} />
          <Tooltip title="目標">
            <Checkbox
              checked={target}
              onChange={() => onToggleTarget(node.id)}
              size="small"
              sx={{ p: 0.25 }}
            />
          </Tooltip>
          <Tooltip title="研究済み">
            <Checkbox
              checked={unlocked}
              onChange={() => onToggleUnlocked(node.id)}
              size="small"
              sx={{ p: 0.25 }}
            />
          </Tooltip>
        </Stack>
        <Box>
          <Typography fontWeight={800} sx={{ lineHeight: 1.2 }}>
            {researchNodeName(node)}
          </Typography>
          {researchNodeSecondaryName(node) ? (
            <Typography variant="caption" color="text.secondary">
              {researchNodeSecondaryName(node)}
            </Typography>
          ) : null}
        </Box>
        <Stack direction="row" spacing={0.75} flexWrap="wrap">
          <Chip label={node.tierCostRange || node.tierLabel} size="small" />
          {node.treeSlot ? (
            <Chip label={`Slot ${String(node.treeSlot).toUpperCase()}`} size="small" variant="outlined" />
          ) : null}
          <Chip label={`${formatNumber(node.crowns)} Crowns`} size="small" variant="outlined" />
        </Stack>
        {dependencyDataAvailable ? (
          <Box>
            <Typography variant="caption" color="text.secondary">
              前提
            </Typography>
            <Stack direction="row" spacing={0.6} useFlexGap flexWrap="wrap" sx={{ mt: 0.4 }}>
              {requiredIds.length === 0 ? (
                <Chip label={node.isRoot ? "Root" : "前提なし"} size="small" variant="outlined" />
              ) : (
                requiredIds.map((requiredId) => {
                  const requiredNode = nodesById.get(requiredId);
                  const missing = missingRequirementIds.includes(requiredId);
                  const unknown = unknownRequirementIds.includes(requiredId);
                  return (
                    <Tooltip
                      title={unknown ? requiredId : missing ? "未研究の前提ノード" : "前提ノード"}
                      key={`${node.id}-${requiredId}`}
                    >
                      <Chip
                        label={requiredNode ? researchNodeName(requiredNode) : requiredId}
                        color={unknown ? "error" : missing ? "warning" : "default"}
                        size="small"
                        variant={requiredNode && unlockedIds.has(requiredId) ? "filled" : "outlined"}
                        sx={{ maxWidth: 210 }}
                      />
                    </Tooltip>
                  );
                })
              )}
            </Stack>
          </Box>
        ) : null}
        <Tooltip title={materialText(node)}>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", lineHeight: 1.35 }}>
            {shortMaterialText(node)}
          </Typography>
        </Tooltip>
      </Stack>
    </Box>
  );
}

function sortResearchNodes(a: TechNode, b: TechNode): number {
  const aColumn = a.treeColumn ?? a.tier;
  const bColumn = b.treeColumn ?? b.tier;
  if (aColumn !== bColumn) return aColumn - bColumn;
  if (a.tier !== b.tier) return a.tier - b.tier;

  const slotCompare = String(a.treeSlot ?? "").localeCompare(String(b.treeSlot ?? ""), "ja", {
    numeric: true,
  });
  if (slotCompare !== 0) return slotCompare;

  return researchNodeName(a).localeCompare(researchNodeName(b), "ja");
}

function ResearchDependencyTree({
  nodes,
  nodesById,
  targetIds,
  unlockedIds,
  layoutDataAvailable,
  dependencyDataAvailable,
  onToggleTarget,
  onToggleUnlocked,
}: {
  nodes: TechNode[];
  nodesById: Map<string, TechNode>;
  targetIds: Set<string>;
  unlockedIds: Set<string>;
  layoutDataAvailable: boolean;
  dependencyDataAvailable: boolean;
  onToggleTarget: (id: string) => void;
  onToggleUnlocked: (id: string) => void;
}) {
  const branchGroups = techBranches
    .map((branch) => ({
      branch,
      nodes: nodes
        .filter((node) => node.branchSlug === branch.slug)
        .sort((a, b) => a.tier - b.tier || researchNodeName(a).localeCompare(researchNodeName(b), "ja")),
    }))
    .filter((group) => group.nodes.length > 0);

  if (branchGroups.length === 0) {
    return (
      <Alert severity="info" variant="outlined">
        条件に一致する研究ノードがありません。
      </Alert>
    );
  }

  return (
    <Stack spacing={2}>
      {branchGroups.map(({ branch, nodes: branchNodes }) => {
        const sortedBranchNodes = [...branchNodes].sort(sortResearchNodes);
        const columnGroups = dependencyDataAvailable && !layoutDataAvailable
          ? [...new Set(sortedBranchNodes.map((node) => getResearchDepth(node, nodesById)))]
              .sort((a, b) => a - b)
              .map((depth) => ({
                key: `depth-${depth}`,
                label: depth === 0 ? "Root" : `Step ${depth + 1}`,
                nodes: sortedBranchNodes
                  .filter((node) => getResearchDepth(node, nodesById) === depth)
                  .sort(sortResearchNodes),
              }))
          : layoutDataAvailable
            ? [...new Set(sortedBranchNodes.map((node) => node.treeColumn ?? node.tier))]
                .sort((a, b) => Number(a) - Number(b))
                .map((column) => ({
                  key: `tier-${column}`,
                  label: `Tier ${column}`,
                  nodes: sortedBranchNodes
                    .filter((node) => (node.treeColumn ?? node.tier) === column)
                    .sort(sortResearchNodes),
                }))
          : [
              {
                key: "checklist",
                label: "Checklist",
                nodes: sortedBranchNodes,
              },
            ];

        return (
          <Box className="research-branch-tree" key={branch.slug}>
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mb: 1.25 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: branch.color,
                  boxShadow: `0 0 18px ${branch.color}66`,
                }}
              />
              <Typography variant="h2">{branch.name}</Typography>
              <Chip label={branch.summary} size="small" variant="outlined" />
              <Chip label={`${branchNodes.length} nodes`} size="small" />
            </Stack>

            <Box sx={{ overflowX: "auto", pb: 1 }}>
              <Box
                className="research-tree-grid"
                sx={{
                  display: "grid",
                  gridTemplateColumns: layoutDataAvailable || dependencyDataAvailable
                    ? `repeat(${columnGroups.length}, minmax(270px, 1fr))`
                    : "repeat(auto-fit, minmax(270px, 1fr))",
                  gap: 2,
                  minWidth: layoutDataAvailable || dependencyDataAvailable
                    ? `${Math.max(760, columnGroups.length * 302)}px`
                    : 0,
                }}
              >
                {columnGroups.map((columnGroup) => (
                  <Box className="research-tier-column" key={`${branch.slug}-${columnGroup.key}`}>
                    <Stack spacing={1.25}>
                      <Box
                        sx={{
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                          py: 0.75,
                          px: 1,
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 1,
                          backgroundColor: "rgba(16,20,23,0.92)",
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {columnGroup.label}
                        </Typography>
                        <Typography fontWeight={800}>{columnGroup.nodes.length} nodes</Typography>
                      </Box>
                      {columnGroup.nodes.map((node) => (
                        <ResearchNodeCard
                          key={node.id}
                          node={node}
                          target={targetIds.has(node.id)}
                          unlocked={unlockedIds.has(node.id)}
                          nodesById={nodesById}
                          unlockedIds={unlockedIds}
                          dependencyDataAvailable={dependencyDataAvailable}
                          onToggleTarget={onToggleTarget}
                          onToggleUnlocked={onToggleUnlocked}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("research");
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
  const dependencyDataAvailable = useMemo(() => hasExplicitResearchDependencies(techNodes), []);
  const layoutDataAvailable = useMemo(
    () =>
      (Boolean("hasProgressionLayout" in techTreeSource && techTreeSource.hasProgressionLayout) ||
        techNodes.some((node) => node.treeColumn !== null && node.treeColumn !== undefined && node.treeSlot)),
    [],
  );

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
  const targetNodeIdsWithPrerequisites = useMemo(
    () =>
      dependencyDataAvailable
        ? collectPrerequisiteClosure(targetNodeIds, nodesById)
        : targetNodeIds,
    [dependencyDataAvailable, nodesById, targetNodeIds],
  );
  const activeTargetNodeIds = useMemo(
    () =>
      state.hideUnlocked
        ? targetNodeIdsWithPrerequisites.filter((id) => !unlockedIds.has(id))
        : targetNodeIdsWithPrerequisites,
    [state.hideUnlocked, targetNodeIdsWithPrerequisites, unlockedIds],
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
              {activeTab === "research"
                ? `data: ${techNodes.length} nodes / generated ${generatedDate}`
                : "銃と弾のダメージ確認 / アーマー参考表"}
            </Typography>
          </Box>
          {activeTab === "research" ? (
            <>
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
            </>
          ) : null}
        </Toolbar>
        <Box sx={{ px: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(_event, value: AppTab) => setActiveTab(value)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value="research" label="Research Tracker" />
            <Tab value="equipment" label="武器・アーマー" />
          </Tabs>
        </Box>
      </AppBar>

      <Container maxWidth={false} sx={{ py: 3 }}>
        {activeTab === "equipment" ? (
          <EquipmentStatsPage />
        ) : (
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
              </Stack>
              <Divider />
              {techNodes.length === 0 ? (
                <Alert severity="warning" variant="outlined">
                  研究ツリーデータが未生成です。`npm run generate:data` を実行してください。
                </Alert>
              ) : (
                <ResearchDependencyTree
                  nodes={filteredNodes}
                  nodesById={nodesById}
                  targetIds={targetIds}
                  unlockedIds={unlockedIds}
                  layoutDataAvailable={layoutDataAvailable}
                  dependencyDataAvailable={dependencyDataAvailable}
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
                  const prerequisiteIds = dependencyDataAvailable
                    ? collectPrerequisiteClosure([node.id], nodesById).filter((id) => id !== node.id)
                    : [];
                  const prerequisiteText =
                    prerequisiteIds.length === 0
                      ? "前提なし"
                      : prerequisiteIds
                          .map((id) => {
                            const requiredNode = nodesById.get(id);
                            return requiredNode ? researchNodeName(requiredNode) : id;
                          })
                          .join(", ");
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
                        {researchNodeName(node)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                        {branchLabel(node)} / {materialText(node)}
                        {dependencyDataAvailable ? ` / ${prerequisiteText}` : ""}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Paper>
          ) : null}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
