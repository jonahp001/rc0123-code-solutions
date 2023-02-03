/* exported getValues */

function getValues(object) {
  var newArray = [];
  for (var keys in object) {
    var keyValues = object[keys];
    newArray.push(keyValues);
  }
  return newArray;
}
