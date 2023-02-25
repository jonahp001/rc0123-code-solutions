/* exported flatten */
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
