import { stat } from "fs";
// To check is a file
stat("./file.txt", (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stats.isFile());
    }
});
// To get the file size
stat("./largeFile.txt",(err,stats)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(stats.size);
    }
})
//To check is it a directory or not
stat("./largeFile.txt",(err,stats)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(stats.isDirectory());
    }
})
