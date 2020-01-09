//Path module
const path = require('path');

const filename = path.join(__filename);
const basename = path.basename(filename);
const extname = path.extname(basename); // .extname(filename) is also fine

console.log(filename);
console.log(basename);
console.log(extname);
