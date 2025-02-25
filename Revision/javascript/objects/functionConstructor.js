function Car(model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Car.prototype.wheel= function(){
    return 4;
}

const BMW = new Car("BMW",2024,"blue")
BMW.wheel();
console.log(BMW.wheel());
const tesla = new Car("BMW",2024,"blue")
console.log(BMW === tesla)