// This function collects all the odd numbers in a given array into anouther array using recursion

//Through Helper Method Recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(
  collectOddValues([1, 2, 3, 4, 9, 10, 22, 23, 43, 2, 34, 5, 6, 7, 8986, 213])
);
