import * as http from 'node:http';

const agent = new http.Agent({ keepAlive: true }); //To create a new agent with keepAlive true
//standard way is create a agent and put in the options

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET',
  agent
};

http.get(options, (res) => {
  console.log('First request received response');
  res.on('data', (chunk) => {
    console.log('Response Data:', chunk.toString());
  });
  res.on('end', () => {
    console.log('First request ended');
  });
});

http.get(options, (res) => {
  console.log('Second request received response');
  res.on('end', () => {
    console.log('Second request ended');
  });
  agent.destroy();
console.log("agent destroyed")
});


// http.get(options,(res)=>{
//     console.log("after destoryed");
//     res.on('end',()=>{
//         console.log('ended')
//     });
// })  throws error because the live connection is destroyed


