/* exported capitalize */

/*

  define a function 'capitalize' that takes one parameter 'string'
    declare a variable 'capitalWord' and assign an empty string to it
    begin a loop that iterates through 'string'
      for each index in 'string'
        if the index is zero,
          declare a variable 'capLetter' and assign the capitalized version of the first index of 'string'
          add the variable 'capitalWord' with 'capLetter' and assign that value to 'capitalWord'
        if the index is anything else,
          declare a variable 'lowerLetter' and assign the lower-case version of 'string' at that current index
          add the variable 'capitalWord' with 'lowerLetter' and assign that value to 'capitalWord'
    return the variable capitalWord

*/

function capitalize(string) {
  var capitalWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      var capLetter = string[0].toUpperCase();
      capitalWord += capLetter;
    } else {
      var lowerLetter = string[i].toLowerCase();
      capitalWord += lowerLetter;
    }
  }
  return capitalWord;
}
