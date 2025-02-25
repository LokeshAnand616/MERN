let str = "lokesh iya yyapan adaws ohioad"

console.log(str.split(" ").join(""))
console.log(str.split(/\s/g).join(""))
console.log(str.replaceAll(" ",""))
console.log(str.split(" ",3).join(""))
console.log(str.split("").toSpliced(1,4).join(""))
console.log(typeof Array.from(str));

console.log(str.concat("   dadas"));
