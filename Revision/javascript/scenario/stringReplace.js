const str="a quick brown fox jumps over the lazy dog";

str1 = str.split(" ").map(word => word === "fox" ? "dog" : word==="dog"?"fox":word).join(" ");
console.log(str1);