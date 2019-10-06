/*The Object.freeze() method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.*/


// Example 1
const obj1 = {
    value: 23
};

const obj2 = Object.freeze(obj1);

obj2.value = 24;

console.log(obj2.value);

// Example 2
var obj3 = {
    property: function() {

    },
    name: "apple"
};

console.log(obj3);

obj3.name = "mango";
delete obj3.property;
console.log(obj3);
var obj4 = Object.freeze(obj3);
obj4.name = "cherry";
console.log(obj3);