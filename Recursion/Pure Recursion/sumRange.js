// This number sums all the numbers starting from 1 up to that number
// Input should be a positive number

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(30));
