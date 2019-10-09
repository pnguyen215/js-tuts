/**
JavaScript boolean toSource() method returns a string representing the source code of the object.

*/
function book(id, name) {
    this.id = id
    this.name = name
}

var book1 = new book(1, "clean code")

console.log(book1.toSource())