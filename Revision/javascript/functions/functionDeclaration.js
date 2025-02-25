console.log(sum(5,6))
// function declaration
function sum (a,b){
    return a + b;
}
//function expression
const add =function(a,b){
    return a+b;
}
console.log(add(7,8));

//Imediatly invoked function
(function(a,b){
    console.log(a+b)
})(5,6);

//Arrow function
const greet =(name)=>`hello ${name}`
console.log(greet('lokesh'))

//Async function
async function data() {
    return "data fetched"
}
data().then((data)=>console.log(data))

//default parameters
function name(_,a="lokesh"){
    console.log(a);
}
name('iyyappan','praveen');

//lexical scopre
function outer(){
    let outer = "outer"
    function inner(){
       return console.log(outer);
    }
    inner();
}

outer();

//clouser scope
function outer() {
    let count = 0; // Stored in memory
  
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const counter = outer(); // outer() runs once and returns inner()
  counter(); // Output: 1
  counter(); // Output: 2
  counter(); // Output: 3

  //pure function
  function pure(a,b){
    return a+b;
  }
  console.log(pure(5,8));
  console.log(pure(5,8));

  //impure function
  let total = 0;
  function impure(a,b){
    return total += a+b;
  }
  console.log(impure(5,8));
  console.log(impure(5,8)); 

  