import crypto from "node:crypto"

const user1 = crypto.createECDH('secp256k1');
const user2 = crypto.createECDH('secp256k1');

const user1PrivateKey = user1.generateKeys();
const User2PrivateKey = user2.generateKeys();

const user1PublicKey =  user1.getPublicKey();
const user2PublicKey =  user2.getPublicKey();

const user1SharedKey = user1.computeSecret(user2PublicKey);
const user2SharedKey = user2.computeSecret(user1PublicKey);

if(user1SharedKey.equals(user2SharedKey)){
    console.log("success")
}else{
    console.log("insecure")
}
