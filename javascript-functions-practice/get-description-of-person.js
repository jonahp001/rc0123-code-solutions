/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var fullDescription = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return fullDescription;
}
