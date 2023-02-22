var $h1 = document.querySelector('h1');

function countDownEarth() {
  if ($h1.textContent === '4') {
    $h1.textContent = '3';
  } else if ($h1.textContent === '3') {
    $h1.textContent = '2';
  } else if ($h1.textContent === '2') {
    $h1.textContent = '1';
  } else if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDownId);
  }
}

var countDownId = setInterval(countDownEarth, 1000);
