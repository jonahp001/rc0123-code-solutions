/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstEmptyArray = [];
  var secondEmptyArray = [];

  var noSpaceFirstString = firstString.replaceAll(' ', '');
  for (var j = 0; j < noSpaceFirstString.length; j++) {
    firstEmptyArray.push(noSpaceFirstString[j]);
  }

  var noSpaceSecondString = secondString.replaceAll(' ', '');
  for (var i = 0; i < noSpaceSecondString.length; i++) {
    secondEmptyArray.push(noSpaceSecondString[i]);
  }

  var sortedFirstArray = firstEmptyArray.sort();
  var sortedSecondArray = secondEmptyArray.sort();

  if (sortedFirstArray.join('') === sortedSecondArray.join('')) {
    return true;
  } else {
    return false;
  }

}
