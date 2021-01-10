// FACTORIAL OF A POSITIVE NUMBER
// INPUT MUST BE A POSITIVE NUMBER

//Through Iteration

function factorial1(num) {
  let sum = 1;
  for (let i = num; i >= 1; i--) {
    sum *= i;
  }
  return sum;
}

//Through Recursion

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));
