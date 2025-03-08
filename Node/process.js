import process from "process";
import { fork } from "child_process";
const child = fork("server.js")

//events in process 

//before exit used to create a process before event loop empties and exit
process.on("beforeExit",(code)=>{
        console.log(`before exit ${code}`) //we can also add async process
})

//exit when the process is about to exit
process.on("exit",(code)=>{
    console.log(`exited ${code}`)
})


// function startWorker() {
//     const worker = fork("worker.js");
//     worker.on("disconnect", () => {
//         console.log("Worker disconnected! Restarting...");
//         startWorker();
//     });
// }

// startWorker();

//uncaughtException
// process.on("uncaughtException", (err) => {
//     console.log("🔥 Uncaught Exception:", err.message);
// });

// throw new Error("This is an error!");

// process.on("uncaughtExceptionMonitor", (err) => {
//     console.log("🛠️ Monitoring uncaught exception:", err.message);
// });

// throw new Error("Monitor this error!");


process.on("unhandledRejection", (reason, promise) => {
    console.log("⚠️ Unhandled Rejection:", reason);
});

Promise.reject("Oops, no catch!");

console.log("Before aborting...");
process.abort();

