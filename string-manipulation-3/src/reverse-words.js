/* exported reverseWords */
function reverseWords(string) {
  var newString = '';
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    for (var j = stringArray[i].length - 1; j >= 0; j--) {
      newString += stringArray[i][j];
    }
    if (i === stringArray.length - 1) {
      return newString;
    }
    newString += ' ';
  }
}
