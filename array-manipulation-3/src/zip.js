/* exported zip */

/*

define a function 'zip' that takes 2 parameters 'first' and 'second'
  declare a variable 'outerArray' and assign to it an empty array
  declare a variable 'innerArray' and assign to it an empty array
  if the length of 'first' is greater than the length of 'second'
    declare a variable 'length' and assign to it the number value of the length of 'second'
  if 'first' is not longer than 'second'
    assign the number value of the length of 'first' to 'length' instead ('length' is the smaller array)
  loop through 'first' and 'second' from the first index up until and including the value of 'length'
    push the value of 'first' and 'second' at every index to 'innerArray'
    then push 'innerArray' to 'outerArray'
    before each iteration in the loop, have 'innerArray' set back to an empty array
  return 'outerArray'

*/
function zip(first, second) {
  var outerArray = [];
  var innerArray = [];
  if (first.length > second.length) {
    var length = second.length;
  } else {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    innerArray.push(first[i]);
    innerArray.push(second[i]);
    outerArray.push(innerArray);
    innerArray = [];
  }
  return outerArray;
}
