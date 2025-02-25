let str1 ="listen";
let str2 = "silent";

console.log(str1.split("").sort().join().includes(str2.split("").sort().join()));//not optimized because of sort

//optimized

let count = Array(26).fill(0)

str1.split("").forEach(char => count[char.charCodeAt(0) - 97]++);
str2.split("").forEach(char => count[char.charCodeAt(0) - 97]--);

console.log(count.every(curr => curr ===0))

console.log(count);
