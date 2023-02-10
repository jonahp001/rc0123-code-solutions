var bookArray = [
  {
    isbn: '2314-51256-1232',
    title: 'chunky monkey',
    author: 'the man in the yellow hat'
  },
  {
    isbn: '1523-51904-9589',
    title: 'ditto is my name',
    author: 'pikapew chu'
  },
  {
    isbn: '4019-59143-4929',
    title: 'diddy kong',
    author: 'DK'
  }
];

console.log('type of bookArray: ', typeof bookArray);

var jsonBookArray = JSON.stringify(bookArray);
console.log('typeof JSON.stringify bookArray: ', typeof jsonBookArray);

var jsonStudent = '{"Number id": 30128759, "String name":"joney baloney"}';
console.log('typeof jsonStudent: ', typeof jsonStudent);

var jsonObject = JSON.parse(jsonStudent);
console.log('typeof jsonObject: ', typeof jsonObject, jsonObject);
