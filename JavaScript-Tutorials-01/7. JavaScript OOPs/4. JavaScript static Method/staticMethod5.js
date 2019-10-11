/**
 * 
 * to invoke a static method within the non - static method
 */

// example 
class Person {
    static display() {
        return 'static method is involed!'
    }
    detail() {
        console.log(Person.display())
    }
}

var person = new Person()
//person.display() // we can not access by this way for static method
console.log(Person.display())
person.detail()