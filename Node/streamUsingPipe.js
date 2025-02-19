import { createReadStream, createWriteStream, read, write } from "fs";

const readStream = createReadStream("file.txt", { highWaterMark: 10 });
const writeStream = createWriteStream("streams.txt");

writeStream.cork();
writeStream.on("drain", () => {
  console.log("The buffer is drained");
});

writeStream.on("pipe", () => {
  console.log("piped to the writable stream");
});

writeStream.on("unpipe", () => {
  console.log("unpiped");
});

writeStream.on("finish", () => {
  console.log("finished writing the data");
});
writeStream.uncork();
readStream.pipe(writeStream, {end:false});

readStream.on("end",()=>{
    writeStream.write('\nAppended after piping.');
    writeStream.end();
})

readStream.on('error',()=>{
    readStream.destroy();
    console.log("error occured stream ended")
});
