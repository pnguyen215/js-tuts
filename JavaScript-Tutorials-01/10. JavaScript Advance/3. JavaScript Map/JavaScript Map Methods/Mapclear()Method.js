/*
The JavaScript map clear() method is used to remove all the elements from Map object.

*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(4, "bently");
console.log("size of map before calling clear(): " + map.size);
// 
map.clear();
console.log("size of map after calling clear(): " + map.size);