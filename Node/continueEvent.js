import { createServer } from 'http';

const server = createServer((req, res) => {
    console.log('Received request for', req.url);

    // Handle Expect: 100-continue
    if (req.headers['expect'] === '100-continue') {
        console.log('Received Expect: 100-continue. Responding with 100 Continue...'); // Send 100 Continue
    }

    req.on('data', (chunk) => {
        console.log('Receiving data chunk:', chunk.length);
        // console.log(chunk.toString());
    });

    req.on('end', () => {
        console.log('Upload complete.');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded successfully.');
    });
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080...');
});
