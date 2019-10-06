/*
The JavaScript map delete() method is used to remove all the elements from Map object.



*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(4, "bently");
document.writeln("size of map before calling clear(): " + map.size + "<br/>");
// 
map.delete(1);
document.writeln("size of map after calling clear(): " + map.size + "<br/>");