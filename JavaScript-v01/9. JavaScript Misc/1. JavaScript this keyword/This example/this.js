var person = {
    name: 'phuocnguyen',
    age: 23,
    location: 'vn',
    detail: function () {
        return this.name + " " + this.age + " " + this.location
    }
}

var clerk = person.detail()
console.log(clerk)