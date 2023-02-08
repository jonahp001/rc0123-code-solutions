/* exported take */

/*

  define a function 'take' that takes 2 parameters 'array' and 'count'
    if the length of 'array' is zero,
      return 'array'
    otherwise, declare a new variable 'newArray' that has an empty array assigned
    begin a loop that iterates through 'array'-- the loop will iterate 'count' number of times
      send the value of the array at the current index to 'newArray'
    return the array of 'newArray'

*/

function take(array, count) {
  if (array.length === 0) {
    return array;
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
