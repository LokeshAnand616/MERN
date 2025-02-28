//1.Write a parent class Fruits that extends two child classes Orange and apply.
// Create on function print.Create object for orange and apple .Call separtely 
// the function that should return color,taste of the fruit

//2)You have two objects: employee1 and employee2. The employee1 object has a method 
// getDetails() that prints the employee's name and position. Borrow this method for
//  employee2 using call().

const employee1 = {
    name: "Lokesh",
    position: "Frontend Developer",
    getDetails: function() {
        console.log(`${this.name} works as a ${this.position}.`);
    }
};

const employee2 = {
    name: "Iyyappan",
    position: "Backend Developer"
};

console.log(employee1.getDetails.call(employee2))

//3) You have an array of numbers [10, 20, 30, 40], and you need to find the maximum number using
//  Math.max(). However, Math.max() doesn't accept an array directly. Use apply() to solve this problem.

const numbers = [10, 20,8000, 30, 40];

console.log(Math.max.apply(null,numbers))

//4) You're working on a button click event. The button should display its label when clicked.
//  However, this inside the event listener refers to undefined. Fix this issue using bind().

const button = {
    label: "Submit",
    handleClick: function() {
        console.log(`Button clicked: ${this.label}`);
    }
};

// const bindfn = button.handleClick.bind(button);
// console.log(bindfn())
console.log(button.handleClick())


