//NODE
//DOUBLY LINKED LIST

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var current = new Node(value);
    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      current.prev = this.tail;
      this.tail.next = current;
      this.tail = current;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    var current = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    current.next = null;

    this.length--;
    return current;
  }

  insert(position, value) {
    if (position > this.length || position < 0) return false;

    var newNode = new Node(value);
    var current = this.get(position - 1);

    if (position === 0) return this.unShift(value);
    if (position === this.length) return this.push(value);

    newNode.next = current.next;
    newNode.prev = current;

    current.next = newNode;

    current = newNode.next;
    current.prev = newNode;

    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
    }
    this.length--;
    return current;
  }

  unShift(value) {
    var current = new Node(value);
    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      current.next = this.head;
      this.head.prev = current;
      this.head = current;
    }
    this.length++;
    return current;
  }

  remove(position) {
    if (position >= this.length || position < 0 || !this.head) return undefined;

    var deletedNode = this.get(position);

    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();

    var current = deletedNode.prev;
    current.next = deletedNode.next;
    deletedNode.next.prev = current;
    deletedNode.next = null;

    this.length--;
    return deletedNode;
  }

  get(position) {
    if (position >= this.length || position < 0) return undefined;
    var current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }
  set(position, value) {
    if (position >= this.length || position < 0) return false;
    var current = this.get(position);
    current.val = value;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  reverseTraverse() {
    var current = this.tail;
    while (current) {
      console.log(current.val);
      current = current.prev;
    }
  }
}

var newDoubleList = new DoublyLinkedList();
newDoubleList.push(268);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(168);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(667);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(46);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(16);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(62);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.push(6);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.pop();
console.log("List ========");
newDoubleList.traverse();

console.log("Reverse List ========");
newDoubleList.reverseTraverse();

newDoubleList.unShift(92);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.unShift(9);
console.log("List ========");
newDoubleList.traverse();

newDoubleList.insert(0, 23);
console.log("List after Inserting ========");
newDoubleList.traverse();

newDoubleList.insert(2, 200);
console.log("List after Inserting ========");
newDoubleList.traverse();

newDoubleList.insert(newDoubleList.length, 2000);
console.log("List after Inserting ========");
newDoubleList.traverse();

newDoubleList.remove(0);
console.log("List after Removing ========");
newDoubleList.traverse();

newDoubleList.remove(newDoubleList.length - 1);
console.log("List after Removing ========");
newDoubleList.traverse();

newDoubleList.remove(5);
console.log("List after Removing ========");
newDoubleList.traverse();
