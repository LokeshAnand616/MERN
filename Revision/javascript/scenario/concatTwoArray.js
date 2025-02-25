//without concat or spread

const arr = ['a','b','c'];
const arr2 = ['d' ,'e' ,'f'];

// arr.push(...arr2);
console.log(arr)

arr.push.apply(arr,arr2);
console.log(arr)

const[...arr3]=[...arr,...arr2]
console.log(arr3)



