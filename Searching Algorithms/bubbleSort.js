// BUBBLE SORT

// Largest value bubbles to the end
// We compare teo value, if the second one is smaller than the first, we swap
// Size of the array we operate upon decreases with each pass

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
}

arr = [1, 4,76,56,45,34,23,21,78,89,4,1,3,5,4,1];
bubbleSort(arr);
console.log(arr);
