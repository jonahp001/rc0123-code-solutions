/* exported student */
var student = {
  firstName: 'Jonah',
  lastName: 'Park',
  subject: 'JavaScript',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
