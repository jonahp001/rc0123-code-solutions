/* exported lastChars */
function lastChars(length, string) {
  var cutOffPoint = string.length - length;
  var newString = string.slice(cutOffPoint, string.length);
  if (string.length - length <= 0) {
    return string;
  }
  return newString;
}
