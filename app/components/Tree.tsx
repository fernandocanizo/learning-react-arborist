import type { GroupTree, GroupNode } from "~/types";

import TreeNode from "./TreeNode";

export default function Tree({ treeData, depth = 0 }: {
  treeData: GroupTree,
  depth: number,
  }) {
  return (
    <ul>
      {treeData.map((node: GroupNode) => (
        <TreeNode node={node} key={node.key} depth={depth} />
      ))}
    </ul>
  );
}
