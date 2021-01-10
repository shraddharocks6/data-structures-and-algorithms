// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an Array that includes both values that sum to zero or undefined if a pair does not exit

//NAIVE SOLUTION
//Time Complexity = O(N^2)
//Space Complexity = O(1)

function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}


//A BETTER SOLUTION
//Time complexity = O(N)
//Space Complexity = O(1)

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left] , arr[right]];
        } else if(sum > 0){
            rigth--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
