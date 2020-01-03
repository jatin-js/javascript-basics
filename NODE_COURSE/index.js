// const person = require('./person');
// console.log(person.name);

//import Person from './person'; //Used in react, to implement here, use babble to compile to ES6. This is last feature of ES6 which is not perfect in Node yet.

const Person = require('./person'); //Common js, ES6

const person1 = new Person('Jatin Doe', 19);
person1.greeting();
