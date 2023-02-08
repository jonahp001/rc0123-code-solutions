/* exported dropRight */

function dropRight(array, count) {
  if (array.length === 0 || array.length < count) {
    return [];
  }
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
