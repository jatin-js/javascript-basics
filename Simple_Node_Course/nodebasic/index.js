// console.log('hello world');
// const square = {
//   area: a => a * a,
//   perimeter: a => 4 * a,
// };

// (function (exports, require, module, __filename, __dirname){

// }

const square = require('./square'); //File based modules

const calSquare = a => {
  console.log(`the value of a is ${a} and area is ` + square.area(a));
  console.log(`the value of a is ${a} and perimeter is ` + square.perimeter(a));
};

console.log(__filename);
console.log(__dirname);
calSquare(5);
