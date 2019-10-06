/***
 * The super keyword is used to call the parent class constructor.
 * 
 * 
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

class Employee extends Person { // we call Employee 'is a' Person
    constructor(id, name) {
        super()
        this.id = id
        this.name = name
    }
}

var employee = new Employee(1, 'phuocnguyen')
console.log(employee.id + " " + employee.name + " " + employee.location)