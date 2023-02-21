function ExampleConstructor() {}
console.log('value of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor: ', newExampleConstructor);

var instanceExample = newExampleConstructor instanceof ExampleConstructor;
console.log('value of instanceExample: ', instanceExample);
