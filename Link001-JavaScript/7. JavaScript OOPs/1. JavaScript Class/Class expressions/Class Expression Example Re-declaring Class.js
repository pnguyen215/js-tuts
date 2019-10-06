/**
 * Unlike class declaration, the class expression allows us to re - declare the same class
 * So, if we try to declare the class more than one time, it throws an error.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var person = class {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    detail() {
        console.log(this.id + " " + this.name)
    }

}
var person1 = new person(1, "phuocnguyen")
person1.detail()

// Re-declaring class  
var person = class {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    detail() {
        console.log(this.id + " " + this.name)
    }

}

var person2 = new person(2, "david")
person2.detail()

var person = class {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    detail() {
        console.log(this.id + " " + this.name)
    }

}

var person3 = new person(2, "david")
person3.detail()