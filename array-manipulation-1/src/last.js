/* exported last */

/*

  define a function 'last' that takes one parameter 'array'
    declare a variable 'lastIndex' and assign to it the value of the length of the array minus one
    return the value of the array at 'lastIndex'

*/

function last(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
