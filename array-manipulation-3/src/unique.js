/* exported unique */

/*

define a function 'unique' that takes one parameter 'array'
  declare a variable 'newArray' and assign to it an empty array
  loop through 'array'
    if 'newArray' does not contain 'array' at a given index
      push the value of 'array' at the index to 'newArray'
  return 'newArray'

*/
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;

}
