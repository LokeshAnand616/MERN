import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";
import process from "node:process";

const availableCPUs = availableParallelism();

if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);
    console.log(`Creating ${availableCPUs} worker threads...\n`);

    // Fork workers equal to available CPUs
    for (let i = 0; i < availableCPUs; i++) {
        cluster.fork();
    }

    // When a worker is created
    cluster.on("fork", (worker) => {
        console.log(`Worker ${worker.process.pid} has been created.`);
    });

    // Listen for messages from workers
    cluster.on("message", (worker, message) => {
        console.log(`Received message from Worker ${worker.process.pid}:`, message);
    });

    // Restart workers if they exit
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Code: ${code}, Signal: ${signal}`);
        console.log("Spawning a new worker...");
        cluster.fork();
    });

} else {
    // Worker process creates an HTTP server
    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello from Worker ${process.pid}`);
    });

    server.listen(3000, () => {
        console.log(`Worker ${process.pid} is running and handling requests...`);
    });

    // Send a message to the primary process
    process.send(`Worker ${process.pid} is ready`);
}
