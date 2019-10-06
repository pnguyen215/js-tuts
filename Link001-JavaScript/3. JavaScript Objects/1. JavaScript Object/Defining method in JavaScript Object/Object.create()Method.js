/*
The Object.create() method is used to create a new object with the specified prototype object and properties. We can create an object without a prototype by Object.creates (null).
*/
// Example 1
const person = {

    myGreeting: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const you = Object.create(person);
you.name = "phuocnguyen"; // "name" is a property set on "me", but not on "person"  
you.isHuman = true; //  // inherited properties can be overwritten  
you.myGreeting();




// Example 2
function fruits() {
    this.name = "watermelon";

}

function details() {
    fruits.call(this);
    console.log(`Something to eat!`);
}
details.prototype = Object.create(fruits.prototype);
const app = new details();
console.log(app.name);


// Example 3
function newFruits() {
    this.name = "mango";
    this.season = "Spring";
}

function apple() {
    newFruits.call(this);
}

apple.prototype = Object.create(newFruits.prototype);
const app2 = new apple();
console.log(app2.name, app2.season);