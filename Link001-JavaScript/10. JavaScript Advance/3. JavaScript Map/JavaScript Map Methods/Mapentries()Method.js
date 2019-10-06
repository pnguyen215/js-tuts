/*
The JavaScript map entries() method returns an object of new map iterator. This object contains the key-value pair for each element. It maintains insertion order.

*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(4, "bently");

var iterator = map.entries();
for (id = 0; id < map.size; id++) {
    document.writeln(iterator.next().value + "<br/>");
}