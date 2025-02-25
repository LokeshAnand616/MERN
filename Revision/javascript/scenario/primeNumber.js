// let prime = [1,2,3,4,5,6,7,8,9,10];
let n = 30;
console.log(
  Array.from({ length: n }, (_, i) => i).filter((curr, index) =>
    curr == 2 ? true : curr % curr == 0 && curr % 2 != 0 && curr != 1
  )
);
