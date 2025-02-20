// process_demo.js

console.log('------ Process Module Demo ------\n');

// 1. Get Command-line Arguments
console.log('Command-line Arguments:', process.argv.slice(2), '\n');

// 2. Get Environment Variables
process.env.MY_CUSTOM_VAR = 'NodeJS Learning';
console.log('Custom Env Variable:', process.env.MY_CUSTOM_VAR, '\n');

// 3. Get Memory and CPU Usage
console.log('Memory Usage:', process.memoryUsage());
console.log('CPU Usage:', process.cpuUsage(), '\n');

// 4. Get Process Information
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Process ID: ${process.pid}`);
console.log(`Parent Process ID: ${process.ppid}\n`);

// 5. Handling Uncaught Exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Uncomment this line to test uncaught exception handling
// throw new Error('Test Uncaught Exception');

// 6. Handling Process Exit
process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});

// 7. Handling Signals (SIGINT - Ctrl + C, SIGTERM)
process.on('SIGINT', () => {
    console.log('Received SIGINT (Ctrl + C). Exiting gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down...');
    process.exit(0);
});

// 8. Next Tick Example
console.log('Before nextTick');
process.nextTick(() => console.log('Inside nextTick'));
console.log('After nextTick\n');

// 9. High-Resolution Timing
const start = process.hrtime();
setTimeout(() => {
    const diff = process.hrtime(start);
    console.log(`Execution time: ${diff[0]}s ${diff[1] / 1e6}ms\n`);
}, 1000);

// 10. Exit Process After 3 seconds
setTimeout(() => {
    console.log('Exiting process in 3 seconds...');
    process.exit(0);
}, 3000);
