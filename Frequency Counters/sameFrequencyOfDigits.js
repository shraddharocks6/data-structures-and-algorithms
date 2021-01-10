//Given two positive integers, find out if the two have the same frequency of digits

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length != str2.length) {
    return false;
  }

  var frequency1 = {};
  var frequency2 = {};

  for (let ch of str1) {
    frequency1[ch] = (frequency1[ch] || 0) + 1;
  }

  for (let ch of str2) {
    frequency2[ch] = (frequency2[ch] || 0) + 1;
  }

  console.log(frequency1);
  console.log(frequency2);

  for (let ch of str1) {
    if (frequency1[ch] !== frequency2[ch]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(12455, 551234));
