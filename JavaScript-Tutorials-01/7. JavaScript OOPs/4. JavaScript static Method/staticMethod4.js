/**
 * 
 * 
 * to invoke a static method within the constructor
 */

class Person {
    constructor() {
        console.log(Person.detail())
        console.log(this.constructor.detail())
    }
    static detail() {
        return 'i am new '
    }
}
var person = new Person()