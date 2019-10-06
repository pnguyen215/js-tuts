/**
 * a Prototype - based approach
 * we perform prototype - based inheritance.In this approach, there is no need to use class and extends keywords
 * 
 * 
 */

function car(company) {
    this.company = company
}
// adding function to car
car.prototype.getCompany = function () {
    return this.company
}

function driver(name, id) {
    this.name = name
    this.id = id
}


var audi = new car('liberty walk')
driver.prototype = audi // Now car treats as a parent of driver.  

var dirver1 = new driver('phuocnguyen', 003)
console.log(dirver1.name + " " + dirver1.id + " " + dirver1.company)