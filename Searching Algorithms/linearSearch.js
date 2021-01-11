//The function takes in an array and a value and then loops through
//every element of the array and check if the current element is equal to the given value.

// Time Complexity = O(n)
// Best case = O(1)
// Worst Case = O(n)
// Average Case = O(n)

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) return i;
  }
  return -1;
}

console.log(linearSearch([1,54,6,7,85,34,657,34,22,12],85));
console.log(linearSearch([1,54,6,7,85,34,657,34,22,12],90));
console.log(linearSearch(["ds","ji","ho"],"ho"));
console.log(linearSearch(["ds","ji","ho"],"hk"));
