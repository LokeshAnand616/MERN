// import { EventEmitter } from 'node:events';
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.emit('error', new Error('whoops!'));
// // Throws and crashes Node.js

import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error());
// Prints: whoops! there was an error

//Actual usecase
import http from 'http';

const server = http.createServer((req, res) => {
  throw new Error('Server Error Occurred!');
});

// Handling server errors
server.on('error', (err) => {
  console.error(`Server Error: ${err.message}`);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
