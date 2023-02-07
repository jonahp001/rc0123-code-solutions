var $lightbulb = document.querySelector('.lightbulb');
var $darkbulb = document.querySelector('.darkbulb');
var $bgDark = document.querySelector('.bg-dark');

$lightbulb.addEventListener('click', turnOff);

function turnOff(event) {
  $bgDark.className = 'bg-dark';
}

$darkbulb.addEventListener('click', turnOn);

function turnOn(event) {
  $bgDark.className = 'hidden';
}
