const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// fs.unlinkSync('file.txt'); // Deletes the file before it's read
