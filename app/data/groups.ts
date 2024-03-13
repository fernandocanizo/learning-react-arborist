import type { GroupTree } from "~/types";

export const groupData: GroupTree = [
  {
    key: "0",
    label: "Empresa Distro One",
    children: [
      {
        key: "0-0",
        label: "Barrio Las Palmas",
        children: [
          {
            key: "0-1-1",
            label: "Casa 01",
          },
          {
            key: "0-1-2",
            label: "Casa 02",
          },
        ],
      },
      {
        key: "1",
        label: "Condominio El Sol",
        children: [
          {
            key: "1-0",
            label: "Depto 101",
          },
          {
            key: "0-0",
            label: "Depto 102",
          },
        ],
      },
      {
        key: "2",
        label: "Empresa A",
        children: [
          {
            key: "2-0",
            label: "Empresa B",
            children: [
              {
                key: "2-0-0",
                label: "Empresa C",
                children: [
                  {
                    key: "2-0-0-0",
                    label: "Empresa D",
                    children: [
                      {
                        key: "2-0-0-0-1",
                        label: "Barrio Las Palometas",
                        children: [
                          {
                            key: "2-0-0-0-1-1",
                            label: "Casa 01",
                          },
                          {
                            key: "2-0-0-0-1-2",
                            label: "Casa 02",
                          },
                          {
                            key: "2-0-0-0-1-3",
                            label: "Casa 03",
                          },
                       ],
                      },
                    ],
                  }
                ],
              },
            ],
          },
          {
            key: "2-1",
            label: "Depto 102",
          },
        ],
      },
    ],
  },
];
