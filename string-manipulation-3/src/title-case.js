/* exported titleCase */
function titleCase(title) {
  var titleString = '';
  var titleArray = title.split(' ');
  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i].toLowerCase().includes('javascript:')) {
      titleString += 'JavaScript:';
    } else if (titleArray[i].toLowerCase().includes('javascript')) {
      titleString += 'JavaScript';
    } else if (titleArray[i].toUpperCase() === 'API') {
      titleString += 'API';
    }
    for (var j = 0; j < titleArray[i].length; j++) {
      if (titleArray[i].toLowerCase().includes('javascript')) {
        break;
      } else if (titleArray[i].toUpperCase() === 'API') {
        break;
      } else if (i === 0 && j === 0) {
        var firstCap = titleArray[i][j].toUpperCase();
        titleString += firstCap;
      } else if (titleArray[i][j] === '-') {
        titleString += titleArray[i][j];
        titleString += titleArray[i][j + 1].toUpperCase();
      } else if (titleArray[i][j - 1] === '-') {
        titleString += '';
      } else if (titleString.endsWith(': ')) {
        titleString += titleArray[i][j].toUpperCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'the') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'and') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'or') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'nor') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'but') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'a') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'an') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'as') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'at') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'by') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'for') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'in') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'of') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'on') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'per') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (titleArray[i].length < 4 && titleArray[i].toLowerCase() === 'to') {
        titleString += titleArray[i][j].toLowerCase();
      } else if (j === 0) {
        titleString += titleArray[i][j].toUpperCase();
      } else if (j > 0) {
        titleString += titleArray[i][j].toLowerCase();
      }
    }
    if (i === titleArray.length - 1) {
      return titleString;
    }
    titleString += ' ';
  }
}
