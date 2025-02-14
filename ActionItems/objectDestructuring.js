// objectDestructuring.js

// Object Destructuring
const user = { name: "Alice", age: 25, city: "New York" };
const { name, age } = user;
console.log(`Name: ${name}, Age: ${age}`);

// Array Destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

// Spread Operator
const newUser = { ...user, country: "USA" };
console.log(newUser);

// Rest Operator
const { city, ...rest } = user;
console.log(rest);
