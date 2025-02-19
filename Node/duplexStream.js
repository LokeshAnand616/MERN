import { Duplex } from 'stream';

const duplexStream = new Duplex({
  read(size) {
    this.push('Data from readable stream\n'); 
    this.push(null); // End the readable stream
  },
  write(chunk, encoding, callback) {
    console.log('Received chunk:', chunk.toString()); // Process written data
    callback(); // Indicate write completion
  }
});

duplexStream.on('data', (chunk) => console.log('Readable:', chunk.toString()));

duplexStream.write('Hello Duplex Stream!');
duplexStream.end();
