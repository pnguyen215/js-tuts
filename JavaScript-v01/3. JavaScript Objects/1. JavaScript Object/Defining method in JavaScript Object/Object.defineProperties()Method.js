/*The Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object.*/

// Example 1
const obj1 = {};

Object.defineProperties(obj1, {
    property1: {
        value: 23,
        value: 2019,
        value: 24,
        value: 2020,
    },
    property2: {
        value: "phuocnguyen",
        value: "david",

    }

});


console.log(obj1.property1, obj1.property2);