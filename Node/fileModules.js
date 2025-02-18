import fs from 'node:fs';
import path from 'node:path';

const folderName = 'myFolder';
const fileName = 'myFile.txt';
const filePath = path.join(folderName, fileName);
const renamedFilePath = path.join(folderName, 'renamedFile.txt');

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log('Folder created:', folderName);
}

fs.writeFileSync(filePath, 'Hello, Node.js!', 'utf8');
console.log('File created & written:', filePath);

fs.appendFileSync(filePath, '\nAppended content!');
console.log('Content appended to file.');

const data = fs.readFileSync(filePath, 'utf8');
console.log('File content:', data);

fs.renameSync(filePath, renamedFilePath);
console.log('File renamed to:', renamedFilePath);

if (fs.existsSync(renamedFilePath)) {
    console.log('File exists:', renamedFilePath);
} else {
    console.log('File does not exist.');
}

// 7️⃣ Read folder contents
const files = fs.readdirSync(folderName);
console.log('Files in directory:', files);

// 8️⃣ Delete the file
fs.unlinkSync(renamedFilePath);
console.log('File deleted:', renamedFilePath);

// 9️⃣ Delete the folder
fs.rmdirSync(folderName);
console.log('Folder deleted:', folderName);
