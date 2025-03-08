import crypto from "crypto";

const user1 = crypto.createDiffieHellman(2048); //largest prime number
 console.log(user1.getPrime().toString("hex"));// gets largest prime number

const primeNumber = user1.getPrime();
const generator = user1.getGenerator();

//public key user 1
const user1PublicKey = user1.generateKeys();

const user2 = crypto.createDiffieHellman(primeNumber,generator);
//public key user 2
const user2PublicKey = user2.generateKeys();

//shared key
const user1SharedKey = user1.computeSecret(user2PublicKey)
const user2SharedKey = user2.computeSecret(user1PublicKey)

if(user1SharedKey.equals(user2SharedKey)){
    console.log("successfull")
}
 