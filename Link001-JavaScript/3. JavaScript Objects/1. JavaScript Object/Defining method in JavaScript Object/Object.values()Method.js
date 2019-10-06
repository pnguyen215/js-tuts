/*
The Object.values() returns an array which contains the given object's own enumerable property values, in the same order as that provided by a for...in loop.
*/

// Example 1
const obj1 = {
    name: "phuocnguyen",
    age: 23,
    year: 2019
};

console.log(Object.values(obj1));

// Example 2
Object.values = function(object) {
    var values = [];
    for (var id in object) {
        values.push(object[id]);
    }
    return values;
}

var otherValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

window.alert(Object.values(otherValues));