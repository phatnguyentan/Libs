import { TreeMenu } from "./tree-menu";

const array: any = [
  {
    id: 1,
    name: "Node1"
  },
  {
    id: 2,
    name: "Node12",
    parent: 1
  },
  {
    id: 3,
    name: "Node111",
    parent: 2
  },
  {
    id: 4,
    name: "Node13",
    parent: 1
  },
  {
    id: 5,
    name: "Node2"
  },
  {
    id: 6,
    name: "Node3",
    parent: 3
  }
];
new TreeMenu(array);
