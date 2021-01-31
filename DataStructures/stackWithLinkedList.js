class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //WE are gonna use the shift and unshift methods in the linked list section as push and pop
  // here. We are doing this to get a constant time for push and pop operations;
  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return undefined;

    var current = this.first;

    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
      current.next = null;
    }

    return --this.size;
  }
}

var stack = new Stack();

console.log(stack.push("jhj"));
console.log(stack.push("gfj"));
console.log(stack.push("kja"));
console.log(stack.push("ppp"));
console.log(stack.push("lkd"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
