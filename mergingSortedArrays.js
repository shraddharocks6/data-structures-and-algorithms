// Merging Two Sorted Arrays
// Given two arrays which are sorted, this fuction
// creates a new array which is also sorted but consistes
// of all of the elements of the two input arrays

// Runs in O(n + m) time and O(n + m) space and does not modify
// the parameters passed to it.

function merge(arr1, arr2) {
  var mergedArray = [];
  var i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  if (i < arr1.length) {
    mergedArray = mergedArray.concat(arr1.slice(i));
  }
  if (j < arr2.length) {
    mergedArray = mergedArray.concat(arr2.slice(j));
  }

  //   if (arr1.length !== arr2.length)
  //     return arr1.length > arr2.length
  //       ? mergedArray.concat(arr1.slice(arr2.length - 1))
  //       : mergedArray.concat(arr2.slice(arr1.length - 1));

  return mergedArray;
}

arr1 = [1, 3, 5, 7, 9, 10, 11, 15, 19, 25];
arr2 = [0, 2, 4, 6, 8, 10];

console.log(merge(arr1, arr2));
console.log(arr1);
console.log(arr2);

//console.log(arr1.slice(arr2.length - 1));
//console.log(arr2.slice(arr1.length - 1));
