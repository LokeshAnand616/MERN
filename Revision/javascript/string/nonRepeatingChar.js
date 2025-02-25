let str = "iyyappagannn";
let res = str.split("").find((char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char)); // first occurence
let res2 = str.split("").filter((char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char)); // all non repeating

console.log(res,res2)
