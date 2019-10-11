/*
The JavaScript map has() method indicates whether the Map object contains the specified key. It returns true if the specified key is present, otherwise false.

*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(4, "bently");

// 
console.log(map.has(5));
console.log(map.has(3));