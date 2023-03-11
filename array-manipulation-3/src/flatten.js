/* exported flatten */

/*

define a function 'flatten' that takes one parameter 'array'
  declare a new variable 'newArray' and assign to it an empty array
    iterate through 'array'
      if the value of 'array' at any index is anything but an array
        push the value of 'array' at the index to 'newArray'
      as we iterate through 'array', start another loop that iterates through 'array's indexes
        if 'array' index cannot be looped through,
          push the value of 'array' at index to 'newArray' and break the inner loop to continue to the outer loop
        else, push the value of 'array's index at the inner loop's index to 'newArray'
  return the 'newArray'

*/
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== typeof newArray) {
      newArray.push(array[i]);
    }
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === undefined) {
        newArray.push(array[i]);
        break;
      }
      newArray.push(array[i][j]);
    }

  }
  return newArray;
}
