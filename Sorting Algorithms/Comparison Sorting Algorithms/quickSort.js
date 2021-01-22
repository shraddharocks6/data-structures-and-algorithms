//QUICK SORT

// Exploits the fact that arrays of size 0 or 1 are always sorted
// Works by seleting ne element ( called the pivot) and finding the
// index where the pivot should end up in the sorted array by moving
// all the elements less than it to its left ad all greater than it to its right.

// Once the pivot is positioned appropriately,
// quick sort is applied to both its left and right side.

// =====================================================================================

// PIVOT HELPER
//  It will help to accept three arguments : An array, a start index and an end index
//  (Can default to zero and array length - 1 respectively.)

//  Grab the pivot from the start of the array
//  Store the current pivot index in a variable
//  (which will keep track of where the pivot should end up)
//  Loop through the array from the start util the end
//  ===== If the pivot is greater than the current element,
//  ===== increment the pivot index variable and then swap
//  ===== the current element with the element at the pivot index
//  Swap the starting element (i.e. the pivot) with the pivot index.

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotElement = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotElement > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

//=========================================
// QUICKSORT

// Call the pivot helper on the array
// When the heler returns the updated pivot index, recursively call
// the pivot helper on the subarray to the left of that index and the
// sub array to the right of that index

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //Left
    quickSort(arr, left, pivotIndex - 1);
    //Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(
  quickSort([
    4,
    56,
    34,
    5,
    79,
    85,
    33,
    23,
    25,
    57,
    6,
    96,
    4334,
    12,
    31,
    34,
    23,
    467,
    8,
    2,
    1,
    5,
    7,
    6,
    3,
  ])
);
