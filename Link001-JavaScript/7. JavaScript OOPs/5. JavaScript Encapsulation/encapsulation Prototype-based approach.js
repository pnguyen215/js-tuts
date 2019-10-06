/**
 * 
 * we perform prototype - based encapsulation
 * 
 * 
 * 
 * 
 */

// example 
function Person(id, name) {
    var n_name = name
    var n_id = id
    Object.defineProperty(this, 'name', {
        get: function () {
            return n_name
        },
        set: function (name) {
            this.n_name = name
        }
    })
    Object.defineProperty(this, 'id', {
        get: function () {
            return n_id
        },
        set: function (id) {
            this.n_id = id
        }
    })
}


var person = new Person(1, 'phuocnguyen')
console.log(person.id + " " + person.name)