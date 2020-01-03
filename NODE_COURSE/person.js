//Module Wrapper Function
// (function(exports, require, module, __filename, __dirname) {

//});

// console.log(__dirname, __filename);

// const person = {
//   name: 'jatin singh',
//   age: 30,
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
