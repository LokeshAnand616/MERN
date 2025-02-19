import { EventEmitter } from "events";
class MyEmitter extends EventEmitter {
  constructor(){
    super();
  }
}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(this);
  console.log(this._eventsCount);
  console.log( this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');

  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     [Symbol(shapeMode)]: false,
  //     [Symbol(kCapture)]: false
  //   } true