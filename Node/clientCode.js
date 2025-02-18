// client.js
import { request } from 'http';
import fs from 'fs';

const filePath = './largeFile.txt'; // Large file path
const fileSize = fs.statSync(filePath).size; // Get file size

const options = {
    hostname: 'localhost', 
    port: 8080,            
    path: '/',             
    method: 'POST',        
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': fileSize, 
        'Expect': '100-continue'  // Requesting 100 Continue
    }
};

// Create the HTTP request
const req = request(options, (res) => {
    console.log(`Server responded with: ${res.statusCode}`);
    
    res.on('data', (chunk) => {
        console.log('Response:', chunk.toString());
    });

    res.on('end', () => {
        console.log('Server response ended.');
    });
});

// Handle the 100 Continue response
req.on('continue', () => {
    console.log('Received 100 Continue. Sending file...');
    const fileStream = fs.createReadStream(filePath);
    
    fileStream.pipe(req); // Send the file after 100 Continue

    fileStream.on('end', () => {
        console.log('File sent successfully.');
        req.end(); // End request after the file is fully sent
    });

    fileStream.on('error', (err) => {
        console.error('File stream error:', err.message);
        req.destroy(err); // Destroy request on error
    });
});

req.on('error', (err) => {
    console.error('Request error:', err.message);
});

// Do not call req.end() initially, it will be called after file is sent!
