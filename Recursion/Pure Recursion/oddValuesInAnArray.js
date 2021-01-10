// This function collects all the odd numbers in a given array into anouther array using recursion

//THROUGH PURE RECURSION

//WE are defining a new array each time through.
// At the end, we are going to concat all the arrays into one array and return that

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  //Checking wether the first number in arr is odd
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]); //If it is odd, we push onto the newArr
  }

  //Then we assign new array to equal newArr.concat( The result of collectOddValues on the rest of the array )
  newArr = newArr.concat(colletOddValues(arr.slice(1)));

  //arr.slice(1) gives us an array containing everything except the first element of arr

  //So then we are waiting for the result of colletOddValues(arr.slice(1))
  //colletOddValues() is called again, a new newArr is generated which is empty
  //if the element encountered now is odd too, it is pushed into the newArr too and
  //colletOddValues(arr.slice(1)) is called again,  this time arr one element shorter

  //When the length of arr is zero, we return the newArr

  return newArr;

  //When the value stored in newArr is returned, it is concatenated to the newArr in the
  //parent call and so on and so forth till we get a newArr in the first called function,
  //containing all the collected odd values
}

