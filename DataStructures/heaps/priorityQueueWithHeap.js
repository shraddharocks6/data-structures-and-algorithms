// Hightst number has highest priority

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (this.values[parentIdx].priority >= this.values[idx].priority) break;

      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];

      idx = parentIdx;
    }
  }

  dequeue() {
    let max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;

    while (2 * idx + 1 < length) {
      let left = this.values[2 * idx + 1];
      let right = 2 * idx + 2 < length ? this.values[2 * idx + 2] : -Infinity;

      if (
        left.priority > this.values[idx].priority &&
        left.priority > right.priority
      ) {
        [this.values[idx], this.values[2 * idx + 1]] = [
          this.values[2 * idx + 1],
          this.values[idx],
        ];

        idx = 2 * idx + 1;
      } else if (
        right.priority > this.values[idx].priority &&
        right.priority > left.priority
      ) {
        [this.values[idx], this.values[2 * idx + 2]] = [
          this.values[2 * idx + 2],
          this.values[idx],
        ];
        idx = 2 * idx + 2;
      } else break;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();

ER.enqueue("Common Cold", 3);
ER.enqueue("Gunshot Wound", 5);
ER.enqueue("High Fever", 4);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);
ER.enqueue("Scrathy throat", 1);

console.log(ER);

ER.dequeue();
console.log(ER);
