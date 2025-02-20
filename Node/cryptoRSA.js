const crypto = require('crypto');

// Step 1: Generate RSA Key Pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Key size (2048-bit is recommended)
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

// Display Keys
console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);

// Message to Encrypt
const message = 'Hello, Secure World!';

// Step 2: Encrypt the Message using the Public Key
const encryptedMessage = crypto.publicEncrypt(
  publicKey,
  Buffer.from(message)
);

console.log('Encrypted Message:', encryptedMessage.toString('hex'));

// Step 3: Decrypt the Message using the Private Key
const decryptedMessage = crypto.privateDecrypt(
  privateKey,
  encryptedMessage
);

console.log('Decrypted Message:', decryptedMessage.toString());

// Step 4: Sign the Message using the Private Key
const sign = crypto.createSign('SHA256');
sign.update(message);
sign.end();

const signature = sign.sign(privateKey, 'hex');
console.log('Digital Signature:', signature);

// Step 5: Verify the Signature using the Public Key
const verify = crypto.createVerify('SHA256');
verify.update(message);
verify.end();

const isValid = verify.verify(publicKey, signature, 'hex');
console.log('Signature Verified:', isValid);
