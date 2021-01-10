// Implement countUniqueValues() which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers but it willl always be sorted

//SOLUTION 0
//Time Complexity = O(N)

function countUniqueValues0(arr) {
  let current;
  let count = 0;
  for (let num of arr) {
    if (num === current) {
      continue;
    } else {
      count++;
      current = num;
    }
  }

  return count;
}

//ANOTHER SOLUTION
//Time Complexity = O(N)

function countUniqueValues(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
