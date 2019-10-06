/**
 * Custom class
 * we declare sub - class that extends the properties of its parent class.
 * 
 * 
 * 
 * 
 * 
 */

class Person {
    constructor() {
        this.location = 'vn'
    }
}

class Student extends Person { // we call Student is a Person
    constructor(name, id) {
        super() // calling to parent is Person
        this.name = name
        this.id = id
    }
    detail() {
        return this.id + " " + this.name + " " + this.location
    }
}

var student = new Student('phuocnguyen', 1)
console.log(student.detail())