/* exported isUpperCased */

/*

  define a function 'isUpperCased' that takes one parameter 'word'
    define a variable 'upperCaseWordTracker' and assign it to an empty string
    begin a loop that iterates through 'word'
      as we iterate through 'word', if the letter at the current index is lower case,
        return false
      else if the letter at the index is upper case,
        add that letter at that index of 'word' to the variable 'upperCaseWordTracker'
    if 'upperCaseWordTracker' is all uppercase,
      return true

*/

function isUpperCased(word) {
  var upperCaseWordTracker = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    } else if (word[i] === word[i].toUpperCase()) {
      upperCaseWordTracker += word[i];
    }
  }
  if (upperCaseWordTracker === upperCaseWordTracker.toUpperCase()) {
    return true;
  }
}
