const crypto = require("crypto");
const { buffer } = require("stream/consumers");

// console.log(crypto.getCiphers());// gives the cipher list

//to create a cipher

//syntax crypto.createCipheriv(algorithm,key,iv)

const algorithm = 'aes-256-gcm'
const key = crypto.randomBytes(32);
const iv =crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv)

//add aditional authentication data
const setAA = cipher.setAAD(Buffer.from("TransactionID: 12345"));

//cipher a string
let encrptionString = cipher.update("hi lokesh","utf-8","hex")
encrptionString+= cipher.final("hex")

//encryption tag
const authTag = cipher.getAuthTag(); 


console.log("encrypt", encrptionString);
console.log("authTag", authTag.toString("hex"));
console.log("data" ,setAA)