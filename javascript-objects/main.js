var student = {
  firstName: 'Jonah',
  lastName: 'Park',
  age: 26
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Administrative Assistant';

console.log('values of livesInIrvine property:', student.livesInIrvine);
console.log('value of previousOccupation property:', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Sonata',
  year: 2018
};
vehicle['color'] = 'pearl';
vehicle['isConvertible'] = false;

console.log('value of the color property:', vehicle['color']);
console.log('value of the isConvertible property:', vehicle['isConvertible']);

var pet = {
  name: 'Daisy',
  type: 'dog'
};
delete pet.name;
delete pet.type;

console.log('value of pet object:', pet);
