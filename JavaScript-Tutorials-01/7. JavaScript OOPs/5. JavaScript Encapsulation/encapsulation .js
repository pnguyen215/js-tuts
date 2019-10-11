/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * a simple example of encapsulation that contains two data members with its setter and getter methods
 */

// example 1
class Student {
    constructor() {
        var name
        var age
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        var date = new Date()
        if (age < 0 || age > date.getFullYear()) { // Validate
            console.log('this is error')
            this.age = null
        } else {

            this.age = date.getFullYear() - age
        }

    }
    getInfo() {
        return this.age + " " + this.name
    }
}
var student1 = new Student()
student1.setAge(1997) // input: year
student1.setName('phuocnguyen')
console.log(student1.getInfo())