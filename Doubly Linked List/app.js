class Node {
  constructor(num = "") {
    this.data = num;
    this.nextNode = "";
    this.preNode = "";
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
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
  reverseDisplay() {
    const list = [];
    let current = this.tail;
    while (current) {
      if (current.data == this.tail.data) {
        list.push(`[tail: ${current.data}]`);
      } else if (!current.preNode) {
        list.push(`[head: ${current.data}]`);
      } else {
        list.push(`[${current.data}]`);
      }
      current = current.preNode;
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
      newNode.preNode = "";

      this.head = newNode;
      this.tail = newNode;
    }
    // todo.......Adding data at the beginning of the list......that's why it's look like reverse....to understand draw in paper.....
    if (current.data) {
      const newNode = new Node(data);
      newNode.nextNode = current;
      this.head.preNode = newNode;
      this.head = newNode;
    }
  }
}

const l = new LinkedList();
l.add(10);
l.add(20);
l.add(100);
// l.add(100);

l.size();
l.display();
l.reverseDisplay();
