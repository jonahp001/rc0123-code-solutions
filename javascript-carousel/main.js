var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $imgList = document.querySelectorAll('img');
var $buttonList = document.querySelectorAll('button');
var $buttonRow = document.querySelector('.button-row');

$rightArrow.addEventListener('click', function (event) {
  for (var i = 0; i < $imgList.length; i++) {
    if ($imgList[i].getAttribute('class') === '') {
      if (i === $imgList.length - 1) {
        $imgList[i].setAttribute('class', 'hidden');
        i = 0;
        $imgList[i].setAttribute('class', '');
      } else {
        $imgList[i].setAttribute('class', 'hidden');
        i++;
        $imgList[i].setAttribute('class', '');
      }
    }
  }
  for (var j = 0; j < $buttonList.length; j++) {
    if ($buttonList[j].getAttribute('class') === 'circle-bg') {
      if (j === $buttonList.length - 1) {
        $buttonList[j].setAttribute('class', '');
        j = 0;
        $buttonList[j].setAttribute('class', 'circle-bg');
      } else {
        $buttonList[j].setAttribute('class', '');
        j++;
        $buttonList[j].setAttribute('class', 'circle-bg');
      }
    }
  }
  clearInterval(intervalTimerId);
  intervalTimerId = setInterval(changeView, 3000);
});

$leftArrow.addEventListener('click', function (event) {
  for (var i = 0; i < $imgList.length; i++) {
    if ($imgList[i].getAttribute('class') === '') {
      if (i === 0) {
        $imgList[i].setAttribute('class', 'hidden');
        i = $imgList.length - 1;
        $imgList[i].setAttribute('class', '');
      } else {
        $imgList[i].setAttribute('class', 'hidden');
        i--;
        $imgList[i].setAttribute('class', '');
      }
    }
  }
  for (var j = 0; j < $buttonList.length; j++) {
    if ($buttonList[j].getAttribute('class') === 'circle-bg') {
      if (j === 0) {
        $buttonList[j].setAttribute('class', '');
        j = $buttonList.length - 1;
        $buttonList[j].setAttribute('class', 'circle-bg');
      } else {
        $buttonList[j].setAttribute('class', '');
        j--;
        $buttonList[j].setAttribute('class', 'circle-bg');
      }
    }
  }
  clearInterval(intervalTimerId);
  intervalTimerId = setInterval(changeView, 3000);
});

$buttonRow.addEventListener('click', function (event) {
  if (event.target.id === 'button-1') {
    for (var i = 0; i < $imgList.length; i++) {
      if ($imgList[i].getAttribute('class') === '') {
        $imgList[i].setAttribute('class', 'hidden');
      }
    }
    for (var j = 0; j < $buttonList.length; j++) {
      if ($buttonList[j].getAttribute('class') === 'circle-bg') {
        $buttonList[j].setAttribute('class', '');
      }
    }
    event.target.setAttribute('class', 'circle-bg');
    $imgList[0].setAttribute('class', '');
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(changeView, 3000);
  } else if (event.target.id === 'button-2') {
    for (var k = 0; k < $imgList.length; k++) {
      if ($imgList[k].getAttribute('class') === '') {
        $imgList[k].setAttribute('class', 'hidden');
      }
    }
    for (var l = 0; l < $buttonList.length; l++) {
      if ($buttonList[l].getAttribute('class') === 'circle-bg') {
        $buttonList[l].setAttribute('class', '');
      }
    }
    event.target.setAttribute('class', 'circle-bg');
    $imgList[1].setAttribute('class', '');
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(changeView, 3000);
  } else if (event.target.id === 'button-3') {
    for (var m = 0; m < $imgList.length; m++) {
      if ($imgList[m].getAttribute('class') === '') {
        $imgList[m].setAttribute('class', 'hidden');
      }
    }
    for (var n = 0; n < $buttonList.length; n++) {
      if ($buttonList[n].getAttribute('class') === 'circle-bg') {
        $buttonList[n].setAttribute('class', '');
      }
    }
    event.target.setAttribute('class', 'circle-bg');
    $imgList[2].setAttribute('class', '');
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(changeView, 3000);
  } else if (event.target.id === 'button-4') {
    for (var o = 0; o < $imgList.length; o++) {
      if ($imgList[o].getAttribute('class') === '') {
        $imgList[o].setAttribute('class', 'hidden');
      }
    }
    for (var p = 0; p < $buttonList.length; p++) {
      if ($buttonList[p].getAttribute('class') === 'circle-bg') {
        $buttonList[p].setAttribute('class', '');
      }
    }
    event.target.setAttribute('class', 'circle-bg');
    $imgList[3].setAttribute('class', '');
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(changeView, 3000);
  } else if (event.target.id === 'button-5') {
    for (var q = 0; q < $imgList.length; q++) {
      if ($imgList[q].getAttribute('class') === '') {
        $imgList[q].setAttribute('class', 'hidden');
      }
    }
    for (var r = 0; r < $buttonList.length; r++) {
      if ($buttonList[r].getAttribute('class') === 'circle-bg') {
        $buttonList[r].setAttribute('class', '');
      }
    }
    event.target.setAttribute('class', 'circle-bg');
    $imgList[4].setAttribute('class', '');
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(changeView, 3000);
  }
});

var intervalTimerId = setInterval(changeView, 3000);

function changeView() {
  for (var i = 0; i < $imgList.length; i++) {
    if ($imgList[i].getAttribute('class') === '') {
      if (i === $imgList.length - 1) {
        $imgList[i].setAttribute('class', 'hidden');
        i = 0;
        $imgList[i].setAttribute('class', '');
      } else {
        $imgList[i].setAttribute('class', 'hidden');
        i++;
        $imgList[i].setAttribute('class', '');
      }
    }
  }
  for (var j = 0; j < $buttonList.length; j++) {
    if ($buttonList[j].getAttribute('class') === 'circle-bg') {
      if (j === $buttonList.length - 1) {
        $buttonList[j].setAttribute('class', '');
        j = 0;
        $buttonList[j].setAttribute('class', 'circle-bg');
      } else {
        $buttonList[j].setAttribute('class', '');
        j++;
        $buttonList[j].setAttribute('class', 'circle-bg');
      }
    }
  }
}
