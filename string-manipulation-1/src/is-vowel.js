/* exported isVowel */
function isVowel(char) {
  var vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowelArray.length; i++) {
    if (char === vowelArray[i]) {
      return true;
    }
  }
  return false;
}
