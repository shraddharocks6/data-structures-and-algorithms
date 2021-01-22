// MERGESORT
// Time Complexity = O(nlogn)
// Space Complexity = O(n)

// BreakUp the array into halves until you have arrays that are empty or have one element
// By using slice()  recursively.
// Then, Merge it back up

const merge = (arr1, arr2) => {
  var mergedArray = [];
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) mergedArray.push(arr1[i++]);
    else mergedArray.push(arr2[j++]);
  }

  if (i < arr1.length) mergedArray = mergedArray.concat(arr1.slice(i));
  if (j < arr2.length) mergedArray = mergedArray.concat(arr2.slice(j));

  return mergedArray;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

var arr = [2, 5, 4, 8, 7, 98, 23, 4, 56, 89, 12, 65, 21, 54];
console.log(mergeSort(arr));

//   while (arr.length > 1) {
//     mergeSort(arr.slice(0, Math.floor((arr.length - 1) / 2)));
//     mergeSort(arr.slice(Math.floor((arr.length - 1) / 2), arr.length - 1));
//   }
//  merge();
