import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


// Register 'newListener' to add a listener for 'new' event
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});

// Register a listener for 'event'
myEmitter.on('event', () => {
    console.log('A');
  });

// Emit the 'event' event
myEmitter.emit('event'); // Expected to print 'A'
myEmitter.emit('event');  // Expected to print 'B'
