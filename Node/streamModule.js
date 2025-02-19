import { createReadStream } from 'fs';

const options = {
    highWaterMark: 10,
    // emitClose : false This wont emit the close event
}

const stream = createReadStream('file.txt', options);

stream.on('readable', () => {
    let chunk;
    while ((chunk = stream.read(5)) !== null) { 
        console.log(`Read chunk: ${chunk.toString()}`);
    }

});

stream.on('error',()=>{
    stream.destroy(new Error("Stream stopped due to an error"));
});

stream.on('close',()=>{
    console.log("stream ended")
})