import { Blob } from 'node:buffer';
const blob = new Blob(['hello']);

//read a blob
blob.arrayBuffer().then((buffer) => {
    console.log(buffer);
  });
  
//to convert blob into text
blob.text().then((text) => {
    console.log(text); // Output: "hello"
  });

//convert blob to bytes
blob.bytes().then((bytes) => {
    console.log(bytes); // Output: Uint8Array(5) [ 104, 101, 108, 108, 111 ]
  });

//stream blob data
const stream = blob.stream();
console.log(stream)
