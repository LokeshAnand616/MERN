import crypto from "node:crypto";

console.log(crypto.getHashes()); // Gets supported hashes

const hash = crypto.createHash('SHA256');
hash.update("lokesh");
console.log(hash.digest('hex'));


//create a HMAC
const secret = "iyyappan"
const hmac = crypto.createHmac('sha256', secret);
hmac.update('lokesh');
console.log(hmac.digest('hex'));
