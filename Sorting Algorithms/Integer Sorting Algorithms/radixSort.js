// RADIX SORT
//  Time Complexity : Best = O(nk), Average = O(nk), Worst = O(nk) , k= word length or number of digits.
//  Space Complexity = O(n + k)

// For Radix sort to be more efficient than the best comparison sorts, k has to be less tha log(n)

// Does not make direct comparison between the elements
// Exploits the fact that information about the size of a number of digits.

// RADIX SORT HELPERS ===
//      getDigit(num,place) => Returns the digit in num at the given place value

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

//      digitCount(num) - returns the number of digits in num

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//      mostDigits(nums) - returns the number of digits in the largest number of the list

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(arr) {
  let numberOfIterations = mostDigits(arr);

  let currentDigit = 0;
  for (let i = 0; i < numberOfIterations; i++) {
    var buckets = Array.from({ length: 10 }, () => []); // Makes an array of 10 empty arrays

    for (let j = 0; j < arr.length; j++) {
      currentDigit = getDigit(arr[j], i);
      buckets[currentDigit].push(arr[j]);
    }

    arr = [].concat(...buckets); // It concates all the subarrays of buckets into a new array one by one

    //arr= [];
    // for (let j = 0; j < 10; j++) {
    //   arr = arr.concat(buckets[j]);
    // }
  }
  return arr;
}

console.log(
  radixSort([2, 89, 45, 23, 78, 45, 67, 89, 234, 567, 890, 2345, 6789, 4356])
);
