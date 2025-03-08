import crypto from "crypto";

// Function to encrypt password (Signup)
function encryptPassword(password) {
    const salt = crypto.randomBytes(16); // Generate random salt
    const iv = crypto.randomBytes(16);   // Generate random IV
    const key = crypto.pbkdf2Sync(password, salt, 1000, 32, "sha512"); // Derive key

    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(password, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return {
        encryptedPassword: encrypted,
        salt: salt.toString("hex"), 
        iv: iv.toString("hex")
    };
}

// Function to verify password (Login)
function verifyPassword(inputPassword, storedEncryptedPassword, storedSalt, storedIV) {
    const salt = Buffer.from(storedSalt, "hex"); // Convert salt back to buffer
    const iv = Buffer.from(storedIV, "hex");     // Convert IV back to buffer
    const key = crypto.pbkdf2Sync(inputPassword, salt, 1000, 32, "sha512"); // Derive key

    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(inputPassword, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return encrypted === storedEncryptedPassword; // Compare encrypted values
}

// Simulating Signup
const userPassword = "lokesh@123";
const { encryptedPassword, salt, iv } = encryptPassword(userPassword);
console.log("Stored Encrypted Password:", encryptedPassword);
console.log("Stored Salt:", salt);
console.log("Stored IV:", iv);

// Simulating Login
const isCorrectUser = verifyPassword("lokesh@123", encryptedPassword, salt, iv);
console.log("Login Successful:", isCorrectUser); // Should return true

const isWrongUser = verifyPassword("wrongpassword", encryptedPassword, salt, iv);
console.log("Login Successful:", isWrongUser); // Should return false
