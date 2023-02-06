/* exported takeRight */

function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  } else if (count > array.length) {
    return array;
  }
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    var arrayIndexVal = array[i];
    newArray.push(arrayIndexVal);
  }
  return newArray;
}
