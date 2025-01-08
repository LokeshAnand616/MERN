// ES6 Built-in Methods Examples

// 1. Array Methods

// Array.from() - Converts array-like or iterable objects to arrays
const str = 'Hello';
const arr = Array.from(str);
console.log('Array.from() - Convert string to array:', arr); // ['H', 'e', 'l', 'l', 'o']

const mySet = new Set([1, 2, 3]);
const setArr = Array.from(mySet);
console.log('Array.from() - Convert Set to array:', setArr); // [1, 2, 3]

// Array.copyWithin() - Copies a part of the array to another location in the same array
const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(2, 0, 2); // Copies elements from index 0 to 2 and places them starting at index 2
console.log('Array.copyWithin() - Copy elements:', arr2); // [1, 2, 1, 2, 5]

// Array.find() - Returns the first element that satisfies the provided testing function
const arr3 = [5, 12, 8, 130, 44];
const found = arr3.find(element => element > 10);
console.log('Array.find() - Find first element > 10:', found); // 12

// Array.findIndex() - Returns the index of the first element that satisfies the testing function
const index = arr3.findIndex(element => element > 10);
console.log('Array.findIndex() - Index of first element > 10:', index); // 1

// Array.includes() - Checks if an array contains a certain element
const arr4 = [1, 2, 3, 4, 5];
console.log('Array.includes() - Contains 3:', arr4.includes(3)); // true
console.log('Array.includes() - Contains 6:', arr4.includes(6)); // false

// 2. Object Methods

// Object.assign() - Copies properties from source to target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log('Object.assign() - Merge objects:', result); // { a: 1, b: 4, c: 5 }

// Object.is() - Compares two values for equality (handles edge cases like NaN and -0)
console.log('Object.is() - Compare 25 and 25:', Object.is(25, 25)); // true
console.log('Object.is() - Compare +0 and -0:', Object.is(+0, -0)); // false
console.log('Object.is() - Compare NaN and NaN:', Object.is(NaN, NaN)); // true

// Object.setPrototypeOf() - Sets the prototype of an object to another object
const animal = { eats: true };
const rabbit = { jumps: true };
Object.setPrototypeOf(rabbit, animal);
console.log('Object.setPrototypeOf() - Inherit from animal:', rabbit.eats); // true

// 3. String Methods

// String.includes() - Checks if a string contains a substring
const sentence = "The quick brown fox jumps over the lazy dog";
console.log('String.includes() - Contains "fox":', sentence.includes("fox")); // true
console.log('String.includes() - Contains "cat":', sentence.includes("cat")); // false

// String.repeat() - Repeats the string a specified number of times
const str2 = "Hello ";
console.log('String.repeat() - Repeat string 3 times:', str2.repeat(3)); // "Hello Hello Hello "

// String.startsWith() - Checks if a string starts with a specific substring
console.log('String.startsWith() - Starts with "Hello":', sentence.startsWith("Hello")); // true

// String.endsWith() - Checks if a string ends with a specific substring
console.log('String.endsWith() - Ends with "dog":', sentence.endsWith("dog")); // true

// 4. Number Methods

// Number.isNaN() - Determines if the value is NaN
console.log('Number.isNaN() - Check NaN:', Number.isNaN(NaN)); // true
console.log('Number.isNaN() - Check 123:', Number.isNaN(123)); // false

// Number.isFinite() - Determines if the value is a finite number
console.log('Number.isFinite() - Check 25:', Number.isFinite(25)); // true
console.log('Number.isFinite() - Check Infinity:', Number.isFinite(Infinity)); // false

// 5. Set and Map Methods

// Set.prototype.forEach() - Iterates through Set elements
const set = new Set([1, 2, 3, 4]);
set.forEach(value => {
  console.log('Set.forEach() - Set value:', value);
});

// Map.prototype.forEach() - Iterates through Map entries
const map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => {
  console.log('Map.forEach() - Map entry:', key, value);
});

// 6. Promise Methods

// Promise.finally() - Runs after promise settles, regardless of success or failure
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then(result => console.log('Promise.then() - Result:', result)) // Success
  .catch(error => console.log('Promise.catch() - Error:', error))
  .finally(() => console.log('Promise.finally() - Finally executed')); // Finally executed

// 7. Other Useful Methods

// Symbol.iterator - Makes an object iterable by defining a default iterator
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

console.log('Symbol.iterator - Iterate through range:');
for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
