import { promisify,callbackify,format, TextEncoder, TextDecoder } from 'util';
import { readFile } from 'fs';

//convert callback into promise
const readFileAsync = promisify(readFile);

readFileAsync('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

//convert promise into callback
async function fetchData() {
  return 'Data fetched!';
}

const callbackFunction = callbackify(fetchData);

callbackFunction((err, data) => {
  if (err) throw err;
  console.log(data); // Output: Data fetched!
});

//format
const name = 'Lokesh';
const age = 22;

console.log(format('My name is %s and I am %d years old.', name, age));

//text encode and decode

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const encoded = encoder.encode('Hello World');
console.log(encoded); // Uint8Array

const decoded = decoder.decode(encoded);
console.log(decoded); // 'Hello World'


