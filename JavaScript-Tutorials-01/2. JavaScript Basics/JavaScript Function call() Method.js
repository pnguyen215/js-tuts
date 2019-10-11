// example 1 
function person(id, name) {
    this.id = id
    this.name = name

}

function employee(id, name) {
    person.call(this, id, name)
}

function worker(id, name) {
    person.call(this, id, name)
}

var new_employee = new employee(1, "phuocnguyen")
var new_worker = new worker(2, "nguyenphuoc")
console.log(new_employee)
console.log(new_worker)