class vehicle{
    constructor(brand,value){
        if(this.constructor!=vehicle){
            this.brand=brand;
            this.value=value
        }else{
            throw new Error("interface");
        }
    }
}

class car extends vehicle{
    constructor(brand,value,year){
        super(brand,value);
        this.year=year;
    }
}

const bmw = new car("bmw","high",2024);
//const vec = new vehicle("bmw", "high")//error
console.log(bmw)