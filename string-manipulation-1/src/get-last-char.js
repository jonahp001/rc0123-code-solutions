/* exported getLastChar */

/*

  define a function 'getLastChar' that takes one parameter 'string'
    declare a variable 'indexLength' and assign to it the result of the length of 'string' minus 1
    return the value of 'string' at the index defined by 'indexLength

*/

function getLastChar(string) {
  var indexLength = string.length - 1;
  return string[indexLength];
}
