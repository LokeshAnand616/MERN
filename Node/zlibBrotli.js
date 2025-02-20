import { brotliCompressSync, brotliDecompressSync } from 'zlib';

// Compress using Brotli
const compressBrotli = (data) => {
    return brotliCompressSync(Buffer.from(data));
};

// Decompress Brotli
const decompressBrotli = (compressedData) => {
    return brotliDecompressSync(compressedData).toString();
};

const text = "Hello, Brotli Compression!";
const compressed = compressBrotli(text);
console.log("Compressed (Brotli):", compressed.toString('base64'));

const decompressed = decompressBrotli(compressed);
console.log("Decompressed:", decompressed);
