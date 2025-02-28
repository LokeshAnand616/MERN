

// const addition = (a,b)=>{
//     console.log(a+b)
// }

// addition(2,4)?addition=null:addition();

// function multiplyBy(n){
//     return function(bun){
//         return bun*n;
//     }
// }
// const res = multiplyBy(5);
// console.log(res(10));

const slowFunction=(num)=>{
    console.log("Computing...");
    return num*2;
}

function memoize(call){
    let cached;
    return cached?cached:cached=call(2)
}

let fastFunction = memoize(slowFunction);
console.log(fastFunction);
console.log(fastFunction);
