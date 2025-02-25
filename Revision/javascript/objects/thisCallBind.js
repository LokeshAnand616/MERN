//call

const obj = {
    name:"lokesh",
    age:24
}

function greet(age){
    return `welcome ${this.name} age is ${age}`
}
console.log(greet.call(obj,obj.age))
//apply
console.log(greet.apply(obj,[obj.age]))

//bind
const greeting = greet.bind(obj);
console.log(greeting(obj.age))
