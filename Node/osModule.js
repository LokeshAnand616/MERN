import os from 'node:os';

console.log('Operating System:', os.type());   
console.log('OS Platform:', os.platform());   
console.log('OS Release:', os.release());     


console.log('CPU Architecture:', os.arch());  


console.log('CPU Info:', os.cpus().length, 'cores');  
console.log('CPU Model:', os.cpus()[0].model);  


console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');


console.log('System Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');


console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());


console.log('Network Interfaces:', os.networkInterfaces());
