var x = 81;
var y = 5;
var z = 9241;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue value:', maximumValue);

var heroes = ['spider-man', 'batman', 'superman', 'robin'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex value:', randomIndex);
var randomHero = heroes[randomIndex];

console.log('random favorite superhero:', randomHero);

var library = [
  {
    title: 'frankenstein',
    author: 'mary shelley'
  },
  {
    title: 'the lion, the witch, and the wardrobe',
    author: 'cs lewis'
  },
  {
    title: 'funny stories',
    author: 'comedian bob'
  }
];
var lastBook = library.pop();
console.log('lastBook info:', lastBook);
var firstBook = library.shift();
console.log('firstBook info:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('books remaining:', library);

var fullName = 'jonah park';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName value:', sayMyName);
