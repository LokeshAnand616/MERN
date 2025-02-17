import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();
eventEmitter.on('sync',()=>{
    console.log("synchronous function in event")
})
eventEmitter.on('async',()=>{
    setImmediate(()=>{
        console.log("asynchronous function in event")
    })
})
console.log("async");
eventEmitter.emit('async');
console.log("sync");
eventEmitter.emit('sync');