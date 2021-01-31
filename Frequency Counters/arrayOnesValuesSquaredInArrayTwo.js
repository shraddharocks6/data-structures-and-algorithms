// PROBLEM : Write a function called same which accepts two Arrays.
// The function should return true if every value in the array has
// Its corresponding value squared in the second array.
// The Frequency of values must be the same.

// same([1,2,3], [4,1,9]) is true
// same([1,2,3], [1,9]) is false
// same([1,2,1], [4,4,1]) is false (Frequency must be same)

//A NAIVE SOLUTION

//In this solution, we have two loops - one for loop and one in the indexOf(0 function.)
//Time Complexity = O of n squared.

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //a.indexOf(n) returns the index of n in the array a. It n is not present in a, it returns -1, It loops over lements too.
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); // It removes the element matched as we are also checking for frequency
  }
  return true;
}

//AN OPTIMISED SOLUTION - THE FREQUENCY COUNTER PATTERN.
//Instead of nested loops, we could loop over each array one time. The time complexity for that is in the order of n

//We have two objects, frequencyCounter1 and frequencyCounter2. Each one is going to count the frequency of individual value in the array.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //We are looking at each key in frequencyCounter1
    if (!(key ** 2 in frequencyCounter2)) {
      // We are checking wether the square of key of frequencyCounter1 is a key in frequencyCounter2 is a key
      return false;
    }
    if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
      // If the frequency of square of key in frequencyCounter2 is not same as the frequency of key in frequencyCounter1
      return false;
    }
    return true;
  }
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
