class Node {
  constructor(num = "") {
    this.data = num;
    this.nextNode = "";
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }
  init() {
    this.head = new Node();
  }
  isEmpty() {
    this.head = new Node();
  }
  display() {
    const list = [];
    let current = this.head;
    while (current) {
      if (current.data == this.head.data) {
        list.push(`[head: ${current.data}]`);
      } else if (!current.nextNode) {
        list.push(`[tail: ${current.data}]`);
      } else {
        list.push(`[${current.data}]`);
      }
      // if (
      //   current.data &&
      //   current.data != this.head.data &&
      //   current.nextNode != ""
      // ) {
      //   list.push(`[${current.data}]`);
      //   // current = current.nextNode;
      // } else if (current.data == this.head.data && current.data) {
      //   list.push(`[head: ${current.data}]`);
      // } else if (current.nextNode == "" && current.data) {
      //   list.push(`[tail: ${current.data}]`);
      // }
      current = current.nextNode;
    }
    console.log(list);
    console.log(list.join("->"));
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.nextNode;
    }
    console.log(count);
  }
  search() {
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    console.log(count);
  }
  add(data) {
    let current = this.head;
    if (!current.data) {
      const newNode = new Node(data);
      newNode.nextNode = "";
      this.head = newNode;
    }
    // todo..............Adding data at the beginning of the list.............
    if (current.data) {
      const newNode = new Node(data);
      newNode.nextNode = current;
      this.head = newNode;
    }
  }
}

const l = new LinkedList();
l.add(10);
l.add(20);
l.add(100);
l.add(10);
l.add(30000);
l.add(30000);
l.add(30000);
l.add(301000);

l.size();
l.display();
