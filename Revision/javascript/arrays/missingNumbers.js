const findMissingNumbers = (arr,n)=>{
    let mySet = new Set(arr);
    let Missingnums = [];

    for(let i =1; i<n;i++){
        if(!mySet.has(i)){
            Missingnums.push(i);
        }
    }
    return Missingnums;
}
const arr = [1, 3, 5, 6, 9]; // Missing: [2, 4, 7, 8]
console.log(findMissingNumbers(arr,arr.sort((a,b)=> b-a)[0])); 