/* exported chunk */

function chunk(array, size) {
  var masterArray = [];
  for (var i = 0; i < array.length; i += size) {
    var slicedArray = array.slice(i, i + size);
    masterArray.push(slicedArray);
  }
  return masterArray;
}
