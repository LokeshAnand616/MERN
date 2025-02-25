const a = 123456;

console.log(a.toExponential());
console.log(a.toExponential(2)); //upto 2 decimal places

const b = 123.7832141243748480909098989
console.log(b.toFixed());// 123 rounds and eliminate decimal

let num = 123.456;
console.log(num.toPrecision(1)); // ✅ "1e+2" (1 significant figure, exponential notation)
console.log(num.toPrecision(2)); // ✅ "1e+2" (1 significant figure, exponential notation)

console.log(num.toPrecision(3)); // ✅ "123" (Rounded to 3 significant figures)
console.log(num.toPrecision(5)); // ✅ "123.46" (Rounded to 5 significant figures)
console.log(num.toPrecision(7)); // ✅ "123.4560" (Adds trailing zeros)

let num2 = 255;
console.log(num2.toString());    // ✅ "255" (Default: base 10)
console.log(num2.toString(2));   // ✅ "11111111" (Binary)
console.log(num2.toString(8));   // ✅ "377" (Octal)
console.log(num2.toString(16));  // ✅ "ff" (Hexadecimal)

