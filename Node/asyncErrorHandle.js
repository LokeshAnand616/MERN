import { EventEmitter } from 'events';

const ee1 = new EventEmitter({ captureRejections: true }); // If this captureRejection is not declared this will crashed 

ee1.on('something', async () => {
  throw new Error('kaboom');
});

// Handle errors properly
ee1.on('error', (err) => {
  console.log('Caught error:', err.message);
});

ee1.emit('something');
