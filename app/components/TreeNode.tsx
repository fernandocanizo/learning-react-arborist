import {
  RiArrowRightDoubleLine,
  RiArrowDownDoubleLine,
} from "react-icons/ri";
import { BsHouse } from "react-icons/bs";

import type { GroupNode } from "~/types"

import { useState } from "react";

import Tree from "~/components/Tree";

// Note: cannot compose dynamic classes with string interpolation, Tailwind would break, so we have to
// point to static strings. We got 25 depth levels only
const depthMarginList = [
  "pl-0",
  "pl-4",
  "pl-8",
  "pl-12",
  "pl-16",
  "pl-20",
  "pl-24",
  "pl-28",
  "pl-32",
  "pl-36",
  "pl-40",
  "pl-44",
  "pl-48",
  "pl-52",
  "pl-56",
  "pl-60",
  "pl-64",
  "pl-[17rem]", // there's no "pl-70"
  "pl-72",
  "pl-[19rem]", // there's no "pl-76"
  "pl-80",
  "pl-[21rem]", // there's no "pl-84"
  "pl-[22rem]", // there's no "pl-88"
  "pl-[23rem]", // there's no "pl-92"
  "pl-96",
]

export default function TreeNode({ node, key, depth = 0 }: {
  node: GroupNode,
  key: string,
  depth: number
  }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <li className={depthMarginList[depth]}>
        <button onDoubleClick={toggleChildren} id={key} className="join flex justify-center items-center list-none rounded-md hover:bg-slate-200 focus:bg-slate-400">
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
      {children?.length && showChildren ? (
        <Tree treeData={children} depth={depth + 1} />
      ) : null}
    </>
  );
}
