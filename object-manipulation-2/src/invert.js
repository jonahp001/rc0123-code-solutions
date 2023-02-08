/* exported invert */

/*

  define a function 'invert' that takes one parameter 'source'
    declare a variable 'invertedObj' and assign an empty object to it
    begin a loop that iterates through 'source'
      while iterating, declare a variable 'inverseKey' and assign to it the value of 'source' at that index
      declare another variable 'inverseKeyValue' and assign to it the current index in the loop
      add to 'invertedObj' the 'inverseKey' variable as the key and 'inverseKeyValue' as the value
    return the object 'invertedObj'

*/

function invert(source) {
  var invertedObj = {};
  for (var key in source) {
    var inverseKey = source[key];
    var inverseKeyValue = key;
    invertedObj[inverseKey] = inverseKeyValue;
  }
  return invertedObj;
}
