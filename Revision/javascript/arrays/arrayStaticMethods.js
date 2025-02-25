console.log(Array.from({length:5},(x,i)=>i)) // 

const arrayLike = {
    length:8,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };
  console.log(arrayLike.length);
  
  console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
//   console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
//   console.log(Array.prototype.at.call(arrayLike));
  
  