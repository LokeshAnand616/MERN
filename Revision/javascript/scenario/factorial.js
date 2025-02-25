let n = 5;
console.log(Array.from({length:n},(_,i)=>i+1).reduce((a,c)=>a*=c))