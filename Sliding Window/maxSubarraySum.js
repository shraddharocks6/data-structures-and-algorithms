// Write a function called maxSubaraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array

//NAIVE SOLUTION
//Time Complexity = O(n^2)

function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//BETTER SOLUTION
// Time Complexity = O(N)

//In the very beginning, we sum the first num elements of the array
//Rather than computing num elements starting from second element , we substract the first from the previously calculated sum and add the next element n the sliding window

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([], 4));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 4)); //13
