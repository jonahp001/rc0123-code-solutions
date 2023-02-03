/* exported initial */

/*

  define a function 'initial' that takes one parameter 'array'
    declare a variable 'newArray' that has an empty array
    start a loop that iterates through 'array'
      as we iterate, as long as the index is less than the last index of the array,
        send the value of the array at that index to the variable 'newArray'
    return the array 'newArray'

*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
