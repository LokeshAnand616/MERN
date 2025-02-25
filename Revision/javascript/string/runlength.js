str = "aaabbcduuuuud";

console.log(str.replace(/(.)\1*/g, (match, char) => char + match.length)); 
console.log(str);


//(.) - selects single character
//\1* - matches multiple occurence
// /g - global