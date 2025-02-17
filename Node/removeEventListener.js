import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

const listener = () => console.log('This is a listener!');

myEmitter.on('event', listener);//listener is a call back function

// myEmitter.emit('event')//executed with output
myEmitter.removeListener('event', listener); // Removes the listener
myEmitter.emit('event'); // No output because listener is removed

