/* exported countdown */
function countdown(number) {
  var list = [];
  var topNum = number;
  while (topNum >= 0) {
    list.push(topNum);
    topNum--;
  }
  return list;
}
