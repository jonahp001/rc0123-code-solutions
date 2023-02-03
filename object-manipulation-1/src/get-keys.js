/* exported getKeys */

/*

  define a function 'getKeys' that takes one parameter 'object'
    declare a new variable 'newArray' and assign an empty array to it
    start a loop that iterates through the different keys in the 'object'
      for each of the keys in the object, send those keys to the 'newArray' variable
    return the resulting array from the 'newArray' variable

*/

function getKeys(object) {
  var newArray = [];
  for (var keys in object) {
    newArray.push(keys);
  }
  return newArray;
}
