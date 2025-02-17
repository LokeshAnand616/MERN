import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.once('start',()=>{
    console.log("This will be executed once");
})

eventEmitter.emit("start");
console.log(eventEmitter.emit("start"));