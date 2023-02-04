/* exported capitalizeWords */

function capitalizeWords(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      var firstLetter = string[0].toUpperCase();
      newString += firstLetter;
    } else if (string[i] === ' ') {
      var capLetters = string[i + 1].toUpperCase();
      newString += ' ' + capLetters;
      i++;
    } else if (i > 0) {
      var lowerLetters = string[i].toLowerCase();
      newString += lowerLetters;
    }
  }
  return newString;
}
