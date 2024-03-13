import type { GroupTree, GroupNode } from "~/types";

import TreeNode from "./TreeNode";

export default function Tree({ treeData }: { treeData: GroupTree }) {
  return (
    <ul>
      {treeData.map((node: GroupNode) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  );
}
