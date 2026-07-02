import type { TechNode } from "./types";

export function getRequiredNodeIds(node: TechNode): string[] {
  return node.requiredNodeIds ?? [];
}

export function hasExplicitResearchDependencies(nodes: TechNode[]): boolean {
  return nodes.some(
    (node) =>
      getRequiredNodeIds(node).length > 0 ||
      (node.dependentNodeIds?.length ?? 0) > 0 ||
      node.isRoot === true,
  );
}

export function collectPrerequisiteClosure(
  targetNodeIds: string[],
  nodesById: Map<string, TechNode>,
): string[] {
  const orderedIds: string[] = [];
  const seenIds = new Set<string>();
  const visitingIds = new Set<string>();

  function visit(nodeId: string) {
    if (seenIds.has(nodeId) || visitingIds.has(nodeId)) return;
    const node = nodesById.get(nodeId);
    if (!node) return;

    visitingIds.add(nodeId);
    for (const requiredNodeId of getRequiredNodeIds(node)) {
      visit(requiredNodeId);
    }
    visitingIds.delete(nodeId);

    seenIds.add(nodeId);
    orderedIds.push(nodeId);
  }

  for (const targetNodeId of targetNodeIds) {
    visit(targetNodeId);
  }

  return orderedIds;
}

export function getDirectMissingRequirementIds(
  node: TechNode,
  unlockedIds: Set<string>,
  nodesById: Map<string, TechNode>,
): string[] {
  return getRequiredNodeIds(node).filter((nodeId) => nodesById.has(nodeId) && !unlockedIds.has(nodeId));
}

export function getUnknownRequirementIds(node: TechNode, nodesById: Map<string, TechNode>): string[] {
  return getRequiredNodeIds(node).filter((nodeId) => !nodesById.has(nodeId));
}

export function getResearchDepth(node: TechNode, nodesById: Map<string, TechNode>): number {
  const memo = new Map<string, number>();

  function visit(nodeId: string, visitingIds: Set<string>): number {
    const memoized = memo.get(nodeId);
    if (memoized !== undefined) return memoized;
    if (visitingIds.has(nodeId)) return 0;

    const currentNode = nodesById.get(nodeId);
    if (!currentNode) return 0;

    const knownRequiredIds = getRequiredNodeIds(currentNode).filter((requiredId) => nodesById.has(requiredId));
    if (knownRequiredIds.length === 0) {
      memo.set(nodeId, 0);
      return 0;
    }

    visitingIds.add(nodeId);
    const depth = Math.max(...knownRequiredIds.map((requiredId) => visit(requiredId, visitingIds))) + 1;
    visitingIds.delete(nodeId);
    memo.set(nodeId, depth);
    return depth;
  }

  return visit(node.id, new Set<string>());
}
