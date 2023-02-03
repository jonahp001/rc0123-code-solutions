/* exported reverseWord */
function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}
