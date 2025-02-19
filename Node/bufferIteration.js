import { Buffer } from 'node:buffer';

const buf = Buffer.from([5, 10, 15]);

for (const byte of buf) {
  console.log(byte);
}
