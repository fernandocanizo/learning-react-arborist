export type GroupNode = {
  key: string
  label: string
  children?: GroupNode[]
}

export type GroupTree = GroupNode[]
