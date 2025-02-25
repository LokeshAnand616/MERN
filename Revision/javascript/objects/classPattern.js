class Person{
    #age
    constructor(name,age,gender){
        this.name=name;
        this.gender=gender
    }
    greet(){
        return `Hello ${this.name}`
    }
    get(){
        return this.#age;
    }
    set(age){
        this.#age = age
    }
}

class Student extends Person{
    constructor(name,age,gender,year){
        super(name,age,gender);
        this.year = year;
    }
}

const lokesh = new Student("lokesh",23,"male",1)
lokesh.set(87)
console.log(lokesh.greet(),lokesh.get());
console.log(lokesh)