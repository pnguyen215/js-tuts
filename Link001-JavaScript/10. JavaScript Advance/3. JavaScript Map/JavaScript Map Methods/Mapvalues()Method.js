/*
The JavaScript map values() method returns an object of new Map iterator
This object contains the value for each element. It maintains insertion order.


*/


// example 
var map = new Map();
map.set(1, "audi");
map.set(2, "bmw");
map.set(3, "mercedes");
map.set(4, "bently");

var iterator = map.values();
for (id = 0; id < map.size; id++) {
    //console.log(iterator.next().value + " ");
    if (iterator.next().value === "ferrari") {
        console.log(false)
    } else {
        map.set(5, "ferrari")
    }
}

function display(keys, values) {
    console.log(values + " " + keys)
}
map.forEach(display)