import { Transform } from 'stream';

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback(); 
  }
});

upperCaseTransform.write('hello world\n');
upperCaseTransform.write('node.js streams\n');
upperCaseTransform.end();

upperCaseTransform.on('data', (chunk) => {
  console.log('Transformed Output:', chunk.toString());
});
