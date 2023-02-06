/* exported ransomCase */

/*

  define a function 'ransomCase' that takes one parameter 'word'
    declare a variable 'ransomWord' and assign an empty string to it
    begin a loop that iterates through 'word'
      if the index in 'word' is even,
        declare a variable 'lower' and assign to it the lower-case version of the letter
        add 'lower' to 'ransomWord'
      else if the index in 'word' is odd,
        declare a variable 'upper' and assign to it the upper-case version of the letter
        add 'upper' to 'ransomWord'
    return 'ransomWord' after the loops is complete

*/

function ransomCase(word) {
  var ransomWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      var lower = word[i].toLowerCase();
      ransomWord += lower;
    } else if (i % 2 > 0) {
      var upper = word[i].toUpperCase();
      ransomWord += upper;
    }
  }
  return ransomWord;
}
