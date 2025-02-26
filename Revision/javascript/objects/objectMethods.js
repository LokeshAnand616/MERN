//hasOwnProperty used to check whether the given property is inherited from other object
const obj = {
    name:'lokesh',
    age: 23
}
const obj2 ={
    year:2025
}
console.log(obj.hasOwnProperty("toString"));

//isPrototypeOf
const student = Object.create(obj);
console.log(obj.isPrototypeOf(student));

//toString()
console.log(obj.toString())

//valueOf
console.log(obj.valueOf());

//object Keys
console.log(Object.keys(obj));

//object Value
console.log(Object.values(obj));

//object entries
console.log(Object.entries(obj));

//object assign
Object.assign(obj,obj2)
console.log(obj)

//object create
const objProtype = Object.create(obj);
console.log(objProtype.__proto__)

//object entries
const objArray = Object.entries(obj);
console.log(Object.fromEntries(objArray));
console.log(Object.is(obj))

