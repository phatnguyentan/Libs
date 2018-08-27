import { Node } from "./node";

export class DoublyLinkedLists {
  head: Node;
  current: Node;
  data: any;
  constructor(array: Array<any>) {
    this.data = [...array];
    this.head = new Node(array[0]);
    array.shift();
    let tmp: Node = this.head;
    array.forEach(element => {
      tmp.next = new Node(element);
      tmp.next.prev = tmp;
      tmp = tmp.next;
    });
    this.current = this.head;
  }

  next() {
    if (this.isNext()) {
      this.current = this.current.next;
    }
  }

  prev() {
    if (this.isPrev()) {
      this.current = this.current.prev;
    }
  }

  add(node: Node) {
    const tmp = this.current;
    while (this.isNext()) {
      this.current = this.current.next;
    }
    this.current.next = node;
    this.current = tmp;
  }

  isNext() {
    if (this.current.next) return true;
    return false;
  }

  isPrev() {
    if (this.current.prev) return true;
    return false;
  }
}
