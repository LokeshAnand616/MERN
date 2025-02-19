import { Buffer } from "buffer";
//write
const buf = Buffer.alloc(20);
buf.write('Hihelloworld', 2,10, "ascii"); // Writes "Hi" starting from index 2 
// //buf.write(string, [offset], [length], [encoding])
console.log(buf);

//fill
const buf1 = Buffer.alloc(5);
buf1.fill(97, 2 ,4); // ASCII for 'a'
//buf.fill(value, [start], [end])
console.log(buf1.toString()); // 'aaaaa'

//copy
const buf3 = Buffer.from('Hello');
const buf2 = Buffer.alloc(5);
buf3.copy(buf2);
console.log(buf2.toString()); // 'Hello'

//Slice to create a view
const buf5 = Buffer.from('Hello');
const part = buf5.slice(1, 3);
console.log(part.toString()); // 'el'

//comparion and search
const buf6 = Buffer.from('ABC');
const buf7 = Buffer.from('ABC');
console.log(buf6.equals(buf7)); // true
console.log(buf6.compare(buf7)); // 0
console.log(buf5.indexOf('e')); 



