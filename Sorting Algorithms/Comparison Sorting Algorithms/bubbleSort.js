// BUBBLE SORT
// Time Complexity = O(n^2)
// When the input array is almost  sorted and we use the noSwap
// variable to sort circuit, Time Complexity = O(n)

// Largest value bubbles to the end
// We compare teo value, if the second one is smaller than the first, we swap
// Size of the array we operate upon decreases with each pass

// Bubble sort is bad for the cases where the data is almost sorted.
// So to sort circuit at that point,we introduce the variable called
// noSwap which counts wether we made any swaps the last pass.

//THE LESS OPTIMISSED BUBBLE SORT

function bubbleSort(arr) {
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// THE MORE OPTIMIZED ONE

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

function bubbleSort(arr) {
  var noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }
}

arr = [1, 4, 76, 56, 45, 34, 23, 21, 78, 89, 4, 1, 3, 5, 4, 1];
bubbleSort(arr);
console.log(arr);
