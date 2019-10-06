/**
 * The call() and apply() method allows us to write a method that can be used on different objects
 * 
 * 
 */

var person = {
    detail: function () {
        return this.name + " " + this.age
    }
}
var new_p = {
    name: 'phuocnguyen',
    age: 23
}

console.log(person.detail.call(new_p))
console.log(person.detail.apply(new_p))