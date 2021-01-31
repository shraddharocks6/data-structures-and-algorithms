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
}

var bsTree = new BinarySearchTree();

bsTree.root = new Node(40);
bsTree.root.right = new Node(67);
bsTree.root.left = new Node(26);
bsTree.root.right.left = new Node(53);

console.log(bsTree.insert(45));
console.log(bsTree.insert(72));

console.log(bsTree.find(72));
console.log(bsTree.find(100));
