class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] >= this.values[idx]) break;

      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];

      idx = parentIdx;
    }
  }

  removeMax() {
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

      if (left > this.values[idx] && left > right) {
        [this.values[idx], this.values[2 * idx + 1]] = [
          this.values[2 * idx + 1],
          this.values[idx],
        ];
        
        idx = 2 * idx + 1;
      } else if (right > this.values[idx] && right > left) {
        [this.values[idx], this.values[2 * idx + 2]] = [
          this.values[2 * idx + 2],
          this.values[idx],
        ];
        idx = 2 * idx + 2;
      } else break;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);

heap.removeMax();
console.log(heap);
