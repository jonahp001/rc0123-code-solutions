/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (second.includes(first[i])) {
      break;
    } else if (newArray.includes(second[j])) {
      continue;
    } else {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
