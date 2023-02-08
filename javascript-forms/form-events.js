function handleFocus(event) {
  console.log("'focus' event has been fired.");
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event has been fired.");
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
}

var $userName = document.forms[0].elements[0];
var $userEmail = document.forms[0].elements[1];
var $userMessage = document.forms[0].elements[2];

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
