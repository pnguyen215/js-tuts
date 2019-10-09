/*
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. Objects are assigned and copied by reference. It will return the target object.

*/

const obj1 = {
    a: 1,
    b: 2,
    c: 3
};

const obj2 = {
    g: 10,
    h: 15,
    i: 18
};


const obj3 = Object.assign({ c: 12, d: 13 }, obj1);
const obj4 = Object.assign({ g: 11, h: 17 }, obj2);

console.log(obj3.c, obj3.d);
console.log(obj4.g, obj4.h);