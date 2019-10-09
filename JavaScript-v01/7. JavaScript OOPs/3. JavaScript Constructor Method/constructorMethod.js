/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    detail() {
        console.log(this.id + " " + this.name)
    }
}

var person = new Person(1, 'phuocnguyen')
person.detail()