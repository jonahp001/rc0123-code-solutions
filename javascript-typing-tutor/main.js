var $spanLetters = document.querySelectorAll('span');

var spanIndexCounter = 0;
$spanLetters[spanIndexCounter].className = 'current-letter';

document.addEventListener('keydown', trackLetterInput);

function trackLetterInput(event) {
  if ($spanLetters[spanIndexCounter].textContent === event.key) {
    $spanLetters[spanIndexCounter].className = 'correct-letter';
    if (spanIndexCounter < $spanLetters.length - 1) {
      spanIndexCounter++;
      $spanLetters[spanIndexCounter].className = 'current-letter';
    }
  } else if ($spanLetters[spanIndexCounter].textContent !== event.key) {
    $spanLetters[spanIndexCounter].className = 'incorrect-letter';
  }
}
