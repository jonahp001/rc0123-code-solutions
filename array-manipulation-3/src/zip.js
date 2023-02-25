/* exported zip */
function zip(first, second) {
  var outerArray = [];
  var innerArray = [];
  if (first.length > second.length) {
    var length = second.length;
  } else {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    innerArray.push(first[i]);
    innerArray.push(second[i]);
    outerArray.push(innerArray);
    innerArray = [];
  }
  return outerArray;
}
