// INSERTION SORT
// Time Complexity = O(n^2) - Worst case - When the array is sorted in reverse order
// Best Case - When the data is almost sorted,  Time Complexity = O(n)

// Insertion sort is a good online algorithm
// In online algorithm, data is opterated upon as it comes through,
// i.e. we don't have all the data at once and newer data keeps ciming.

//Gradually builds up the left portion of the array which is always sorted

function insertionSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  var currentVal;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
}

arr = [1, 4, 76, 56, 45, 34, 23, 21, 78, 89, 4, 1, 3, 5, 4, 1];
insertionSort(arr);
console.log(arr);
