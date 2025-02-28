const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const res = library
  .filter((curr) => curr.readingStatus == true)
  .map((curr) => curr.author);

const persons = [
  { id: 1, lastName: "bye", firstName: "hi" },
  { id: 2, lastName: "bye", firstName: "hey" },
];

const secRes = persons.map((curr)=>curr.firstName+curr.lastName)
// expected : [ 'hibye', 'heybye' ]

console.log(res);
console.log(secRes)
