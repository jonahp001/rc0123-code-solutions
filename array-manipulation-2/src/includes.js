/* exported includes */

/*

  define a function 'includes' that takes two parameters, 'array' and value
    begin a loop that iterates through 'array'
      if the value of 'array' at the current index is the same as 'value'
        return true
    return false if, after iterating through 'array', 'value' does not match 'array' at any index

*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
