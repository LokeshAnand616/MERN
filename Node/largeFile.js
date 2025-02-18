import { writeFileSync } from 'fs';

// Create a large text file (1MB for testing purposes)
const content = 'A'.repeat(1000000); // 1 MB content
const filePath = './largeFile.txt';

writeFileSync(filePath, content, 'utf8');
console.log('Large file created at', filePath);
