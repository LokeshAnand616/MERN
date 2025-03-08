import {randomBytes,createCipheriv, createDecipheriv } from "crypto";
const key = randomBytes(32);
const iv = randomBytes(16);
function EncryptTransaction(userData,addtionalData){
    const algorithm="aes-256-gcm";
    const cipher =createCipheriv(algorithm,key,iv);
    cipher.setAAD(Buffer.from(addtionalData));

    let encriptedDetails = cipher.update(userData,"utf-8","hex");
    encriptedDetails+=cipher.final("hex");
    const authTag = cipher.getAuthTag(); 

    return {
        encriptedDetails,
        authTag
    }

}

const{encriptedDetails,authTag}=EncryptTransaction("creditcarddetails","transactionId");
console.log(DecryptionDetails(encriptedDetails,authTag))

function DecryptionDetails(encriptedDetails,authTag){
    const algorithm = "aes-256-gcm";
    const decipher = createDecipheriv(algorithm,key,iv);

    decipher.setAAD("transactionId");
    decipher.setAuthTag(Buffer.from(authTag,'hex'));

    let decrypted = decipher.update(encriptedDetails, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted
}