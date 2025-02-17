const myEmitter = new EventEmitter();
myEmitter.addListener('event', () => {
  console.log('Event triggered!');
});
myEmitter.emit('event'); // Prints: "Event triggered!"
