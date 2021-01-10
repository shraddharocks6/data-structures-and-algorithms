//Basic example of recursion

function countDown(num) {
  if (num <= 0) {
    console.log("All Done !");
    return 0;
  }

  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(20));