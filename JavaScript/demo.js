// const str2 = 'Is this a question question';

// console.log(str2.endsWith(""));
// Expected output: false

// console.log("whale blue".indexOf("Blue"));

// s1='dog dog dog';
// console.log(s1.indexOf('dog',2));
// console.log(s1.lastIndexOf('dog'));

// console.log('a'.localeCompare('o'));
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found)

// const str = "For more information, see Chapter 3.4.5.1";
// const re = /see (chapter \d+(\.\d)*)/i;
// const found = str.match(re);

// console.log(found);

// console.log("abc".repeat('ab'));

// console.log("the dog and cat where friends".slice(4,15));

// console.log("".split(""));
// let x ="the dog and cat where friends";
// console.log(x.valueOf());
// fruits = ['banana', 'apple', 'peach','','', 'mango','','','','']
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]);
// console.log(fruits.join(' and '));

// let numbers = [1, 2, 3,24, 4, 5];

// // let evenNumbers = numbers.map(num => num % 2 === 0);
// let evenNumbers = numbers.reduce((maxx,curr)=> Math.max(maxx,curr));

// console.log(evenNumbers);

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the Person prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Create a new instance of Person
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);

  console.log(person1);