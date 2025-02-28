//deep closuer
const res=(n)=>{
    return n===0?"done":res(n-1);
}


console.log(res(3)()()())