/* exported getValue */

/*

  define a function 'getValue' that takes 2 parameters: 'object' and 'key'
    start a loop that iterates through 'object'
      if 'key' is in 'object'
        declare a variable 'keyVal' and assign to it the value of the object key
    return the value of 'keyVal'

*/

function getValue(object, key) {
  for (var i in object) {
    if (i === key) {
      var keyVal = object[i];
    }
  }
  return keyVal;
}
