// SINGLY LINKED LIST

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Functions To Add a value

  push(val) {
    var current = new Node(val);

    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      this.tail.next = current;
      this.tail = current;
    }
    this.length += 1;
    return this;
  }

  shift() {
    //Deleting from the head
    if (!this.head) return undefined;
    var deletedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return deletedNode;
  }

  insert(position, value) {
    //Adding a node at a specific position
    if (position > this.length || position < 0) return false;
    if (position === 0) return this.unShift(value);
    else if (position === this.length) return this.push(value);
    else {
      var current = new Node(value);
      var prev = this.get(position - 1);
      current.next = prev.next;
      prev.next = current;
      this.length++;
    }
    return current;
  }

  //Functions To Remove a value

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unShift(val) {
    //Adding a new node to the beggining of the Linked List

    var current = new Node(val);

    if (!this.head) {
      this.head = current;
      this.tail = current;
      this.length++;
      return this;
    }

    current.next = this.head;
    this.head = current;
    this.length++;
    return this;
  }

  remove(position) {
    //Removing a node from a specific position
    if (!this.head || position > this.length - 1 || position < 0) return null;
    if (position === 0) return this.unShift();
    if (position === this.length - 1) return this.pop();

    var prev = this.get(position - 1);
    var removedNode = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return removedNode;
  }

  //Functions to get Value from the list

  traverse() {
    var current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  get(position) {
    //Retriving a node by its position in the Linked List
    var current = this.head;
    if (position < 0 || position > this.length) {
      return null;
    }
    for (var i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }

  //Function to change value in the list

  set(position, value) {
    //Changing the value of a node by its position in the Linked List
    var current = this.get(position);
    if (current) {
      current.val = value;
      return true;
    }
    return false;
  }

  // Function to reverse the list

  reverse() {
    if (!this.head) {
      return false;
    }

    var current = this.head;

    [this.head, this.tail] = [this.tail, this.head];

    var next = current.next,
      prev = null;

    while (next != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return true;
  }
}

// var first = new Node("Number 1");
// first.next = new Node(" Number 2");
// first.next.next = new Node("Number 3");

var newList = new SinglyLinkedList();

newList.push(78);
newList.push(67);
newList.push(56);
newList.push(44);

newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();
console.log(newList.pop());
newList.traverse();

newList.unShift(87);
newList.unShift(45);
newList.unShift(67);
newList.unShift(878);
newList.unShift(879);
newList.unShift(873);

newList.traverse();

console.log(newList.shift());

console.log("The List : ");
newList.traverse();
console.log(newList.get(2));
console.log(newList.set(2, 20));
console.log(newList.get(2));

console.log(newList.insert(2, 40));
console.log(newList.get(2));

newList.traverse();
newList.reverse();
console.log("Reversed");
newList.traverse();
