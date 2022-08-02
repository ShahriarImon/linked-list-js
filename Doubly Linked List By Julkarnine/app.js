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
    this.size = 0;
  }

  display() {
    const list = [];
    let current = this.head;
    while (current) {
      if (!current.preNode) {
        list.push(`[head: ${current.data}]`);
      } else if (!current.nextNode) {
        list.push(`[tail: ${current.data}]`);
      } else {
        list.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }
    console.log(list);
    console.log(list.join("->"));
  }
  reverseDisplay() {
    const list = [];
    let current = this.tail;
    while (current) {
      if (!current.preNode) {
        list.push(`[head: ${current.data}]`);
      } else if (!current.nextNode) {
        list.push(`[tail: ${current.data}]`);
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
  search(data) {
    let current = this.head;
    let flag = false;
    while (current) {
      if (current.data == data) {
        flag = true;
        break;
      }
      current = current.nextNode;
    }
    if (flag) {
      console.log("found", current.data);
    } else {
      console.log("not found 'Sorry'");
    }
    // console.log(count);
  }
  add(data) {
    let current = this.tail;
    if (!current.data) {
      const newNode = new Node(data);
      newNode.nextNode = "";
      newNode.preNode = "";
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
    }
    // todo.........adding data at the end of the list.............
    if (current.data) {
      const newNode = new Node(data);
      current.nextNode = newNode;
      newNode.preNode = current;
      this.tail = newNode;
      this.size += 1;
    }
  }
  insertAfter(data, newData) {
    //here insert any data after this 1st parameter 'data'
    let current = this.head;
    while (current) {
      if (current.data == data) {
        const newNode = new Node(newData);
        console.log(current.preNode.data);
        newNode.preNode = current;
        newNode.nextNode = current.nextNode;
        current.nextNode.preNode = newNode;
        current.nextNode = newNode;
        this.size += 1;
      }

      current = current.nextNode;
    }
  }
  insertBefore(data, newData) {
    //here insert any data before this 1st parameter 'data'
    let current = this.head;
    while (current) {
      if (current.data == data) {
        const newNode = new Node(newData);
        newNode.preNode = current.preNode;
        newNode.nextNode = current;
        current.preNode.nextNode = newNode;
        current.preNode = newNode;
        this.size += 1;
      }
      current = current.nextNode;
    }
  }
}

const l = new LinkedList();
l.add(10);
l.add(20);
l.add(30);
l.add(40);
l.add(50);
l.add(60);
l.add(70);
l.add(100);
l.display();
console.log("size", l.size);
// l.insertAfter(60, 55);
// l.display();
l.insertBefore(60, 55);
l.display();
console.log("size", l.size);
// l.reverseDisplay();
l.search(60);
