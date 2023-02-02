/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    for (var names in students[i]) {
      var currentObj = students[i];
      studentNames.push(currentObj[names]);
    }
  }
  return studentNames;
}
