/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    var lowerCaseWordTracker = '';
    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      return false;
    } else if (word[i] !== word[i].toUpperCase()) {
      lowerCaseWordTracker += word[i];
    }
  }
  if (lowerCaseWordTracker === lowerCaseWordTracker.toLowerCase()) {
    return true;
  }
}
