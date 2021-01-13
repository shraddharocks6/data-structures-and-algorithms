// Function takes a string and a substring and returns
// the number of times the substring occurs in the string

// Time Complexity = O(n^2)

function basicStringSearch(str, substr) {
  var subcount = 0;
  var count = 0;

  if (str.length < substr.length) return 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break;
      subcount++;
    }
    if (subcount === substr.length) {
      count++;
    }
    subcount = 0;
  }

  return count;
}

console.log(
  basicStringSearch(
    " A loop is just a loop man. Don't looloop yourdelf over looping too much",
    "loop"
  )
);
