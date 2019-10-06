/**
 * an example to achieve abstraction
 * 
 * 
 * 
 * 
 */

// example 
function car() { // Creating a constructor function 
    this.name = name
    throw new Error('You can not create an instance of Abstract class')
}

car.prototype.display = function () {
    return 'car is: ' + this.name
}

function form(name) { // Creating a constructor function  
    this.name = name
}

form.prototype = Object.create(car.prototype) // Creating object without using the function constructor  
var audi = new form('liberty walk')
console.log(audi.display())
// we use instanceof operator to test whether the object refers to the corresponding class.
console.log(audi instanceof car)
console.log(audi instanceof form)