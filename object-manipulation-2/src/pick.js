/* exported pick */

/*

  define a function 'pick' that takes two parameters 'source' and 'keys'
    declare a new variable 'newObj' and assign an empty object to it
    begin a loop that iterates through the object 'source'
      as we iterate through 'source' begin a new loop that iterates through array 'keys'
        if the value of 'keys' at the current index is the same as the value of the index in 'source' AND if the value is not undefined,
          add the key and value pair to the 'newObj' object
    return 'newObj'

*/

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
