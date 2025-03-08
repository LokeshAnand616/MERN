console.log(process.versions.openssl);
try {
    const crypto = require('crypto');
    console.log("Crypto module is available.");
} catch (err) {
    console.log("Crypto module is not available:", err);
}
