import { request } from 'node:http';

// Options for the HTTP request
const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  method: 'GET',
};

// Make the request
const req = request(options, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log(data);
  });
});

// Handle request errors
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// End the request
req.end();
