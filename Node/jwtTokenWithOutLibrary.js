import crypto from "node:crypto"

const secretKey = "mySecretKey";
const Algorithm = "sha256"

const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
const payload = Buffer.from(JSON.stringify({user:"lokesh",role:"user"})).toString("hex");

const data = `${header}.${payload}`

const signature = crypto.createHmac(Algorithm,secretKey).update(data).digest("base64url");

const jwt = `${data}.${signature}`;
console.log(jwt)
