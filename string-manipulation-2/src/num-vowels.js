/* exported numVowels */

/*

  define a function 'numVowels' that takes one parameter 'string'
    declare a variable 'vowelCounter' and set the value to zero
    declare an array 'vowelArray' and assign to it all vowels-- upper and lower case
    begin a loop that iterates through 'string'
      as we iterate through string, begin another loop that iterates through 'vowelArray'
        if the value of 'string' at the index is the same as the value of 'vowelArray's index,
          add 1 to vowelCounter
    return the number in vowelCounter

*/

function numVowels(string) {
  var vowelCounter = 0;
  var vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowelArray.length; j++) {
      if (string[i] === vowelArray[j]) {
        vowelCounter++;
      }
    }
  }
  return vowelCounter;
}
