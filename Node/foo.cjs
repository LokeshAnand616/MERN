const circle = require("./circle.cjs");
console.log(require.main === circle);
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
