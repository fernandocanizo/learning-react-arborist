import type { GroupNode } from "~/types"

import { useState } from "react";

import Tree from "~/components/Tree";

export default function TreeNode({ node, key }: {
  node: GroupNode, key: string
  }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <button onClick={handleClick} id={key}>
        {label}
      </button>
      {children?.length ? (
        <ul>
          {showChildren && <Tree treeData={children} />}
        </ul>
      ) : null}
    </>
  );
}
