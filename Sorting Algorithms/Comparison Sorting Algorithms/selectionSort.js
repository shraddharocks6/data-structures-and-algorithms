// SELECTION SORT

// TIME COMPLEXITY = O(N^2)
// Slection Sort is potentially better than bubble sort in terms of number of swaps done.

// Similar to bubble sort but instead of placing larger values into sorted position,
// it places smaller values into positon.
// We find the minimum value of the operable array and put it in the beginning of it by swapping.



function selectionSort(arr) {
  var minIndex;

  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (var i = 0; i < arr.length; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) swap(arr, i, minIndex);
  }
}

arr = [1, 4, 76, 56, 45, 34, 23, 21, 78, 89, 4, 1, 3, 5, 4, 1];
selectionSort(arr);
console.log(arr);
