import { RiArrowRightDoubleLine, RiArrowDownDoubleLine } from "react-icons/ri";
import { BsHouse } from "react-icons/bs";

import type { GroupNode } from "~/types"

import { useState } from "react";

import Tree from "~/components/Tree";

export default function TreeNode({ node, key }: {
  node: GroupNode, key: string
  }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <li>
        <button onClick={toggleChildren} id={key} className="flex justify-center items-center p-2 rounded-md hover:bg-slate-200 focus:bg-slate-400">
          {children?.length ? (
            showChildren ? (
              <RiArrowDownDoubleLine className="join-item pr-1" />
            ) : (
              <RiArrowRightDoubleLine className="join-item pr-1" />
            )
          ) : (
            <BsHouse className="join-item pr-1" />
          )
          }
            <span className="join-item">{label}</span>
        </button>
      </li>
      {children?.length ? (
        <ul>
          {showChildren && <Tree treeData={children} />}
        </ul>
      ) : null}
    </>
  );
}
