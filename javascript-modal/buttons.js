var $modalButton = document.querySelector('.open-button');
var $hiddenPopUp = document.querySelector('.hidden');
var $closePopUp = document.querySelector('.close-button');

function openModal(event) {
  $hiddenPopUp.className = 'hidden-popup-bg';
}

function closeModal(event) {
  $hiddenPopUp.className = 'hidden';
}

$modalButton.addEventListener('click', openModal);
$closePopUp.addEventListener('click', closeModal);
