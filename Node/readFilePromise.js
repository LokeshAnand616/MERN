import fs from 'node:fs/promises';

const reader = await fs.readFile('./file.txt');

console.log(reader.toString())
