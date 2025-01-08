// ES6 Iterators in JavaScript

// 1. Array Iterator Example
const myArray = [10, 20, 30];
const arrayIterator = myArray[Symbol.iterator]();

// Manually using the array iterator
console.log("Array Iterator:");
console.log(arrayIterator.next()); 
console.log(arrayIterator.next()); 
console.log(arrayIterator.next()); 
console.log(arrayIterator.next()); 

// Using for...of loop to iterate over an array
console.log("\nArray iteration with for...of loop:");
for (let value of myArray) {
  console.log(value); // Output: 10, 20, 30
}

// 2. Set Iterator Example
const mySet = new Set([1, 2, 3]);
const setIterator = mySet[Symbol.iterator]();

// Manually using the set iterator
console.log("\nSet Iterator:");
console.log(setIterator.next()); // { value: 1, done: false }
console.log(setIterator.next()); // { value: 2, done: false }
console.log(setIterator.next()); // { value: 3, done: false }
console.log(setIterator.next()); // { value: undefined, done: true }

// Using for...of loop to iterate over a set
console.log("\nSet iteration with for...of loop:");
for (let value of mySet) {
  console.log(value); // Output: 1, 2, 3
}

// 3. Map Iterator Example
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mapIterator = myMap[Symbol.iterator]();

// Manually using the map iterator
console.log("\nMap Iterator:");
console.log(mapIterator.next()); // { value: ['a', 1], done: false }
console.log(mapIterator.next()); // { value: ['b', 2], done: false }
console.log(mapIterator.next()); // { value: ['c', 3], done: false }
console.log(mapIterator.next()); // { value: undefined, done: true }

// Using for...of loop to iterate over a map
console.log("\nMap iteration with for...of loop:");
for (let [key, value] of myMap) {
  console.log(key, value); // Output: 'a' 1, 'b' 2, 'c' 3
}

// 4. Custom Iterator Example: Range of Numbers
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

// Using the custom range iterator
console.log("\nCustom Range Iterator (1 to 5):");
for (let num of range) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}

