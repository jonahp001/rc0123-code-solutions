function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return minutes + ' minutes is ' + seconds + ' seconds.';
}
var secondsConversion = convertMinutesToSeconds(92);
console.log('secondsConversion value:', secondsConversion);

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}
var casualGreeting = greet('jonah');
console.log('casuaGreeting value:', casualGreeting);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}
var areaOfObject = getArea(90, 42);
console.log('areaOfObject value:', areaOfObject);

function getFirstName(person) {
  var firstname = person.firstName;
  return firstname;
}
var personFirstName = getFirstName({ firstName: 'Joey', lastName: 'Chestnut' });
console.log('personFirstName value:', personFirstName);

function getLastElement(array) {
  var lastItem = array[array.length - 1];
  return lastItem;
}
var lastElement = getLastElement(['digimon', 'pokemon', 'beyblades', 'power rangers']);
console.log('lastElement value:', lastElement);
