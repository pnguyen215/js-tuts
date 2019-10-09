/*
The JavaScript map forEach() method execute the specified function once for each key/value pair in the Map object.


*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "bently");
map.set(4, "ferrari");

console.log("Fetching keys and values of: ");

map.forEach(display);

// 
function display(keys, values) {
    console.log(values + " " + keys + " ");
}