function helloThere() {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}

setTimeout(helloThere(), 2000);
