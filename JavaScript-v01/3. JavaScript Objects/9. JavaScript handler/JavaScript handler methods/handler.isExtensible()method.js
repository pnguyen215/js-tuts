/**
The handler.isExtensible() method a trap for Object.isExtensible()
We can be mostly used for logging or auditing calls to Object.isExtensible (determine if an object is "extensible").
Syntax
isExtensible: function(target)
Parameters
target: The target object.

Return value
Return a Boolean value.
*/

const data = {
    num: 23
};
const data2 = {
    num: 24
};

// example 1
var proxy1 = new Proxy(data, {
    isExtensible: function (target) {
        console.log("in isExtensible");
        return Object.isExtensible(target);
    }
});
console.log(Object.isExtensible(proxy1)); // true

Object.preventExtensions(proxy1);
console.log(Object.isExtensible(proxy1)); // false

// example 2
const proxy2 = new Proxy({}, {
    isExtensible: function (target) {
        console.log("in value: ");
        return true;
    }
});
console.log(Object.isExtensible(proxy2)); // true

// example 3
var value = {
    isExtensible(target) {
        return true;
    }
};
const proxy3 = new Proxy(data2, value);
console.log(Object.isExtensible(proxy3)); // true