/* exported getWords */
function getWords(string) {
  var newArray = string.split(' ');
  if (string === '') {
    return [];
  }
  return newArray;
}
