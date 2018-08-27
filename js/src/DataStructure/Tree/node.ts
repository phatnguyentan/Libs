export class Node {
  data: any;
  nodes: any;
  parent: any;

  constructor(data: any) {
    this.data = data;
    this.nodes = [];
  }

  childCount() {
    return this.nodes.length;
  }

  add(node: Node) {
    this.nodes.push(node);
  }
}
