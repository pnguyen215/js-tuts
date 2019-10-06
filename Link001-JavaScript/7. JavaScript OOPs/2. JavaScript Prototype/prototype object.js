/**
 * 
 * 
 * 
 * 
 */

// example 1
function person(id, name) {
    this.id = id
    this.name = name

}

person.prototype.location = 'vn' // add a new property to the constructor function

person.prototype.info = function () {
    return this.id + " " + this.name + " " + this.location
}

// creating new objects
var person1 = new person(1, 'phuocnguyen')
var person2 = new person(2, 'david')
console.log(person1.info())
console.log(person2.info())