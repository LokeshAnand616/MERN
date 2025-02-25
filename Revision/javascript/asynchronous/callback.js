function user(callback){
    callback();
    console.log("welcome");
}
function name1(){
    setTimeout(() => {
        console.log("lokesh")
    }, 2000);
}
user(name1)

