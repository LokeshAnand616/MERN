// ES6 Typed Arrays Example

// 1. Creating a Typed Array from an ArrayBuffer
let buffer = new ArrayBuffer(16); // Create a buffer with 16 bytes (2^4)
let int32Array = new Int32Array(buffer);

console.log("Typed Array from ArrayBuffer:");
console.log(int32Array); // Int32Array(4) [0, 0, 0, 0] (4 slots, each of 4 bytes)

// Assign values to the typed array
int32Array[0] = 42;
int32Array[1] = 55;

console.log(int32Array); // Int32Array(4) [42, 55, 0, 0]

// 2. Creating a Typed Array from an existing array
let arr = new Uint8Array([10, 20, 30, 40]);
console.log("\nTyped Array from existing array:");
console.log(arr); // Uint8Array(4) [10, 20, 30, 40]

// 3. Working with ArrayBuffer and Views
let buffer2 = new ArrayBuffer(8); // Buffer with 8 bytes

// Create a view for 32-bit signed integers (4 bytes each)
let int32View = new Int32Array(buffer2);

int32View[0] = 100; // 4 bytes for the first value
int32View[1] = 200; // 4 bytes for the second value

console.log("\nArrayBuffer with Typed Views:");
console.log(int32View); // Int32Array(2) [100, 200]

// Create a second view for 8-bit unsigned integers (1 byte each)
let uint8View = new Uint8Array(buffer2);
console.log(uint8View); // Uint8Array(8) [100, 0, 0, 0, 200, 0, 0, 0]

// 4. Working with Binary Data in Typed Arrays
let buffer3 = new ArrayBuffer(8); // Buffer to hold 8 bytes
let uint8Array = new Uint8Array(buffer3);

// Fill it with binary data
uint8Array[0] = 255; // Max value for an unsigned 8-bit integer
uint8Array[1] = 128;

console.log("\nWorking with Binary Data:");
console.log(uint8Array); // Uint8Array(8) [255, 128, 0, 0, 0, 0, 0, 0]

// 5. Example: Manipulating Image Data (RGBA format)
let imageData = new Uint8Array([255, 0, 0, 255, 0, 255, 0, 255]); // RGBA data
console.log("\nInitial Image Data (RGBA format):");
console.log(imageData); // [255, 0, 0, 255, 0, 255, 0, 255]

// Modify the first pixel (RGBA format: red, green, blue, alpha)
imageData[0] = 0; // Change red value of the first pixel
imageData[1] = 0; // Change green value of the first pixel
imageData[2] = 255; // Change blue value of the first pixel (now it's blue)
console.log("\nModified Image Data (RGBA format):");
console.log(imageData); // [0, 0, 255, 255, 0, 255, 0, 255]

// 6. Example: Manipulating Audio Data with Float32Array
let audioData = new Float32Array(5); // Create a float32 array for audio data
audioData[0] = 0.5; // Set value for audio sample
audioData[1] = -0.3; // Set value for audio sample
audioData[2] = 1.0; // Set value for audio sample

console.log("\nAudio Data (Float32Array):");
console.log(audioData); // Float32Array(5) [0.5, -0.3, 1.0, 0, 0]

