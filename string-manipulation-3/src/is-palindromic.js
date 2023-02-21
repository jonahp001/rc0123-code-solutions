/* exported isPalindromic */

function isPalindromic(string) {
  var emptyString = '';
  var emptyStringBackwards = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      emptyString += string[i];
    }
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      emptyStringBackwards += string[j];
    }
  }
  if (emptyString === emptyStringBackwards) {
    return true;
  }
  return false;
}
