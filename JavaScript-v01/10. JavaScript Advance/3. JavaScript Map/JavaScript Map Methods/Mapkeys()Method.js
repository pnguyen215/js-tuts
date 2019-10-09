/*

The JavaScript map keys() method returns an object of new Map iterator.
This object contains the key for each element. It maintains insertion order.

*/

// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(5, "bently");

const iterator = map.keys(); // get set of keys
for (id = 0; id < map.size; id++) {
    console.log(iterator.next().value + " ");
}