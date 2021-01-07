// Function which takes in a string and returns counts of each character in the string

// charCount("aaaa"); //{a:4}
// charCount("hello"); //{h:1,e:1,l:2,o:1}

// charCount("");
// charCount(98);

function charCountX(str) {
  //do something
  //return an object that are lowercase alphanumeric characters in the string
  //values should be the counts for those characters
}

function charCount1(str) {
  //Make object to return at end
  //loop over string, for each character
  // if the character is a number/letter AND key in object, add one to count
  // if the char is number/letter AND not in object, add it and set value to 1
  //if the character is something else (space, period, etc.) don't do anything
  // return object at end

  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();    //We could first check wether it is alphanumeric and then convert to lowercase
    if (/[a-z0-9]/.test(char)) {
      //We could replace our regular expression with charater code comparisons so we made the isAlphaNumeric function to check for that
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

function charCount(str) {
  var result = {};

  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1; //If result[char] is true (truthy), it adds one to it. If not (It is falsy), it sets the value to 1
    }
  }

  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
console.log(charCount("Hello Everyone"));
