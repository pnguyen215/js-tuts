/**
The prototype property allows you to add properties and methods to any object(Number, Boolean, String and Date etc.).
Prototype is a global property which is available with almost all the objects

*/
function book(name, id) {
    this.name = name
    this.id = id
}

var myBook = new book("clean code", 01)
book.prototype.price = null
myBook.price = 100

console.log(myBook.name + " " + myBook.id + " " + myBook.price)