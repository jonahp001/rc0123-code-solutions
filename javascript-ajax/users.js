var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function (event) {
  console.log('xhr.status value: ', xhr.status);
  console.log('xhr.response value: ', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $newLi = document.createElement('li');
    $newLi.textContent = xhr.response[i].name;
    $userList.appendChild($newLi);
  }
});
xhr.send();
