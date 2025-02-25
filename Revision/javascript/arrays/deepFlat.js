const arr = [1, [2, [3, [4, 5]], 6], 7];

const deepFlatten = (arr)=>{
    //return arr.flat(Infinity) using flat and infinity
    return arr.reduce((acc , val)=> Array.isArray(val)?acc.concat(deepFlatten(val)):acc.concat(val),[])
}

console.log(deepFlatten(arr)); 
//Output: [1, 2, 3, 4, 5, 6, 7]