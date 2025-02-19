import { Buffer } from "buffer";


const buf = Buffer.alloc(10,12);
const bufarray = Buffer.from([20,23,43,56])
console.log(bufarray.toString('hex'));