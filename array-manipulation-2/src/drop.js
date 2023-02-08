/* exported drop */

/*

  define a function 'drop' that takes two parameters 'array' and 'count'
    declare a new variable 'newArray' and assign an empty array to it
    begin a new loop that iterates through 'array' starting at the index of 'count' until the end
      send the value of the array at the current index to 'newArray'
    return the array 'newArray'

*/

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
