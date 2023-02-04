/* exported capitalizeWord */

/*

  define a function 'capitalizeWord' that has one parameter 'word'
    if the capitalized version of 'word' is the same as the capitalized version of 'javascript',
      return 'JavaScript'
    otherwise, declare a variable 'capWord' with an empty string
    begin a loop that iterates through 'word'
      if the index is 0,
        capitalize the letter at that index and add it to 'capWord'
      else if the index is greater than 0,
        lower-case each index and add it to 'capWord'
    return capWord

*/

function capitalizeWord(word) {
  if (word.toUpperCase() === 'javascript'.toUpperCase()) {
    return 'JavaScript';
  }
  var capWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      var capLetter = word[0].toUpperCase();
      capWord += capLetter;
    } else if (i > 0) {
      var lowerLetter = word[i].toLowerCase();
      capWord += lowerLetter;
    }
  }
  return capWord;
}
