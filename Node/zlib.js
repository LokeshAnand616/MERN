import { gzipSync, gunzipSync } from 'zlib';
import { readFileSync, writeFileSync } from 'fs';

// Read file and compress
const input = readFileSync('file.txt');
const compressed = gzipSync(input);
writeFileSync('example.gz', compressed);
console.log('File compressed synchronously');

// Read compressed file and decompress
const compressedData = readFileSync('example.gz');
const decompressed = gunzipSync(compressedData);
writeFileSync('example_decompressed.txt', decompressed);
console.log('File decompressed synchronously');
