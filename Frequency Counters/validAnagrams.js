//Given two strings, write a function to determine if the second string is
//an anagram of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another

//Solution0

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.toLowerCase();
  arr2.toLowerCase();

  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for (let letter of arr1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }

  for (let letter of arr2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }

  for (let letter in frequencyCounter1) {
    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
      return false;
    }
  }
  return true;
}

//ANOTHER SOLUTION

function validAnagram1(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  const lookup = {};

  for (let letter of arr1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1); //If letter exists, increment , otherwise set to 1
  }

  for (let letter of arr2) {
    //Can't find letter or if frequency is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(validAnagram(" ", " ")); //true
// console.log(validAnagram("aaz", "zza")); //false
// console.log(validAnagram("aazoui", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
// console.log(validAnagram("timeismoney", "istimemoney")); //true
