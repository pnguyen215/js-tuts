/*
The Object.getOwnPropertyNames() method returns an array of all properties (except those non-enumerable properties which use symbol) found directly upon a given object.

*/

// Example 1
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(Object.getOwnPropertyNames(obj1));

// Example 2
var obj2 = { 0: 'a', 3: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj2).sort());
/*Logging property names and values using Array.forEach  */
Object.getOwnPropertyNames(obj2).forEach(function(val, id, array) {
    console.log(val + '->' + obj2[val]);
});


// Example 3
function food(grain, size, shape) {
    this.grain = grain;
    this.size = size;
    this.shape = shape;
}

var spaghetti = new food("wheat", 2, "square");
var name = Object.getOwnPropertyNames(spaghetti).filter(checkWord);
/*print out*/
document.writeln(name);
// check whether the first character of a string  is 's'
function checkWord(value) {
    var firstWord = value.substr(0, 1);
    if (firstWord.toLowerCase() == 's') {
        return true;
    }
    return false;
}