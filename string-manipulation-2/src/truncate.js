/* exported truncate */

/*

  define a function 'truncate' that accepts 2 parameters, 'length' and 'string'
    declare a new variable 'newString' and assign to it the letters in 'string' from 0 to 'length'
    add '...' to the current value of 'newString'
    return newString

*/

function truncate(length, string) {
  var newString = string.slice(0, length);
  newString += '...';
  return newString;
}
