/* exported tail */

/*

  define a function 'tail' that takes one parameter 'array'
    declare a variable 'newArray' that has an empty array
    start a loop that iterates through 'array'
      as we iterate, if the index is not '1',
        send the value of the array at that index to 'newArray'
    return the array 'newArray'

*/

function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
