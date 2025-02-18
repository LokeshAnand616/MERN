import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// newListener fires when a new event listener is registered
myEmitter.once('newListener', (event, listener) => {
  if (event === 'eventb') {
    console.log('newListener triggered for:', event);
    myEmitter.on('eventb', () => {
      console.log('B');
    });
  }
});

// Now adding a listener for 'eventb' triggers 'newListener'
myEmitter.on('eventb', () => {
  console.log('C');
});

myEmitter.emit('eventb'); 


import * as http from 'node:http';

const server = http.createServer((req, res) => {
    console.log(req.headers); // Raw headers (not processed)
    
    let body = "";
    req.on("data", chunk => {
        body += chunk; // Collect data chunks
    });

    req.on("end", () => {
        console.log("Request Body:", body); // Full body received
        res.end("Data received");
    });
});

//Raw HTTP MESSAGE
// {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9',
//     'if-none-match': 'W/"6af-+M4OSPFNZpwKBdFEydrj+1+V5xo"'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9',
//     'if-none-match': 'W/"f1e-19512fc6ce3"',
//     'if-modified-since': 'Mon, 17 Feb 2025 08:18:07 GMT'
//   }
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     dnt: '1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }
//   Request Body: 
//   {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'sec-ch-ua-platform': '"Linux"',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
//     'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//     dnt: '1',
//     'sec-ch-ua-mobile': '?0',
//     accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'no-cors',
//     'sec-fetch-dest': 'image',
//     referer: 'http://localhost:3000/',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'en-US,en;q=0.9'
//   }