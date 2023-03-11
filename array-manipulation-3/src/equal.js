/* exported equal */

/*

define a function 'equal' that takes 2 array parameters, 'first' and 'second'
  if the length of 'first' is different than 'second'
    return false
  if the length is equal, iterate through 'first'
    if the value of 'first' at any given index is different than 'second' at that same index,
      return false

  return true if nothing returns false

*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
