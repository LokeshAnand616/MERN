import { Agent, request } from 'node:http';

const agent = new Agent(
    {   keepAlive: true, 
        keepAliveMsecs: 1000, 
        scheduling:'fifo', 
        timeout:1000, 
        maxFreeSockets:50 
    });

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET',
  agent
};

request(options, (res) => {
  console.log('First request received response');
  res.on('data', (chunk) => {
    console.log('Response Data:', chunk.toString());
  });
  res.on('end', () => {
    console.log('First request ended');
    
    request(options, (res) => {
      console.log('Second request received response');
      res.on('data', (chunk) => {
        console.log('Response Data:', chunk.toString());
      });
      res.on('end', () => {
        console.log('Second request ended');
      });
      res.on('error', () => {
        console.log('Second request connection error');
      });
    }).end(); 
  });
  res.on('error', () => {
    console.log('First request connection error');
  });
}).end(); 
