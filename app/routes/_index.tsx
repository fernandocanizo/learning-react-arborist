import type { MetaFunction } from "@remix-run/node"

import Tree from "~/components/Tree"
import { groupData } from "~/data/groups"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <div>
      <h1 className="text-3xl text-center font-bold underline bg-red-600 text-amber-500">TreeView POC</h1>
      <Tree treeData={groupData} />
  </div>
  );
}
