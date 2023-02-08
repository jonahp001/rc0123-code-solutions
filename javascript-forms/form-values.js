var $contactForm = document.forms[0];
$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

  event.preventDefault();

  var $nameValue = document.forms[0].elements.name.value;
  var $emailValue = document.forms[0].elements.email.value;
  var $messageValue = document.forms[0].elements.message.value;

  var storedDataObj = {
    name: $nameValue,
    email: $emailValue,
    message: $messageValue
  };
  console.log('stored data:', storedDataObj);
}
