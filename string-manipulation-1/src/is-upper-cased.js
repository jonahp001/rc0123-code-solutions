/* exported isUpperCased */

/*

  define a function 'isUpperCased' that takes one parameter 'word'
    if the value of 'word' is the same as if we convert 'word' all to uppercase,
      return true
    if that is not the case, return false

*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
