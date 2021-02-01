class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var currentParent = this.root;

    while (1) {
      if (currentParent.val > value) {
        if (!currentParent.left) {
          currentParent.left = newNode;
          return this;
        }
        currentParent = currentParent.left;
      } else if (currentParent.val < value) {
        if (!currentParent.right) {
          currentParent.right = newNode;
          return this;
        }
        currentParent = currentParent.right;
      } else {
        console.log("Already present");
        return this;
      }
    }
  }

  find(value) {
    // Finding a node in a BST
    if (!this.root) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.val) current = current.left;
      else if (value > current.val) current = current.right;
      else found = true;
    }
    return found ? current : false;
  }

  BFS() {
    var data = [],
      queue = [],
      current = this.root;
    queue.push(this.root);
    while (queue.length) {
      current = queue.shift();
      data.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];

    function traverse(current) {
      data.push(current.val);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      data.push(current.val);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      data.push(current.val);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);
    return data;
  }
}

var bsTree = new BinarySearchTree();

bsTree.insert(40);
bsTree.insert(67);
bsTree.insert(26);
bsTree.insert(53);

console.log(bsTree.insert(45));
console.log(bsTree.insert(72));

console.log(bsTree.find(72));
console.log(bsTree.find(100));

console.log(bsTree.BFS());
console.log(bsTree.DFSPreOrder());
console.log(bsTree.DFSPostOrder());
