// DIVIDE and CONQURE
// Works only on sorted arrays

// Time Complexity = O(logn) {Worst and Average Case}
// Bast Case = O(1)

// The idea is to pick a pivot, usually in the middle and then decide that wether the
// value we are looking for is in the left side of the pivot,
// right side of the pivot or the pivot itself.
// We keep doing this tilll either we find the element or we conclude that it is not present in the array

//We assume that we are only working with numbers for now

function binarySearch(sortedArr, value) {
  var left = 0;
  var right = sortedArr.length - 1;
  var middle = Math.floor((left + right) / 2);

  while (sortedArr[middle] !== value && left < right) {
    if (sortedArr[middle] < value) left = middle + 1;
    else if (sortedArr[middle] > value) right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }
  return sortedArr[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 4, 6, 8, 12, 14, 17, 19, 22, 25, 28], 6));
console.log(binarySearch([1, 4, 6, 8, 12, 14, 17, 19, 22, 25, 28], 45));
console.log(binarySearch([1, 4, 6, 8, 12, 14, 17, 19, 22, 25, 28], 14));
