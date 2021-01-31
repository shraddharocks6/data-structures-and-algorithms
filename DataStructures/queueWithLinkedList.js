class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return undefined;
    }

    var current = this.first;

    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
      current.next = null;
    }

    this.size--;
    return current;
  }
}

var q = new Queue();
console.log(q.enqueue("first"));
console.log(q.enqueue("first"));
console.log(q.enqueue("first"));
console.log(q.enqueue("first"));

console.log(q.dequeue());