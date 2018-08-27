import { Node } from "./node";

export class TreeMenu {
  root: any = {};
  // flatter root
  flattenRoot: any = {};
  // array root
  arrRoot: any = [];
  nodes: any;

  constructor(data: any) {
    const ids = data.map((d: any) => d.id);
    let unique: any = [];
    ids.forEach((id: any) => {
      if (!unique.includes(id)) {
        unique.push(id);
      }
    });
    if (unique.length !== ids.length) {
      throw new Error("Duplicate id");
    }
    // clone data
    this.flattenRoot = data.reduce((acc: any, c: any) => {
      acc[c.id] = c;
      return acc;
    }, {});
    Object.keys(this.flattenRoot).forEach((k: any) => {
      this.flattenRoot[k] = new Node(this.flattenRoot[k]);
    });
    Object.keys(this.flattenRoot).forEach((k: any) => {
      if (this.flattenRoot[k].data.parent) {
        this.flattenRoot[this.flattenRoot[k].data.parent].add(
          this.flattenRoot[k]
        );
      } else {
        this.root[k] = this.flattenRoot[k];
        this.arrRoot.push(this.flattenRoot[k]);
      }
    });
  }
}
