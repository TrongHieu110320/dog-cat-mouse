var Dog = require('./dog.js');
var Cat = require('./cat.js');
var dog = new Dog('Tom');
var cat = new Cat('Tom');
dog.sayHi();
dog.eat(cat);
console.log(dog);

