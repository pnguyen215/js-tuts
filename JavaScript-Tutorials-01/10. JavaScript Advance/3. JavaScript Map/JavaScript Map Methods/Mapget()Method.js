/*
The JavaScript map get() method returns the value of specified key of an element from a Map object
*/

// example 
var collection_cars = ["audi", "bmw", "ferrari", "bently", "mercedes"];
var map = new Map();
// map.set(key, value);
var id = 0;
for (id = 0; id < collection_cars.length; id++) {
    map.set(id, collection_cars[id]); // mapping element f array to map 
}

/* get(id) value from map */
var j = 0;
for (j = 0; j < map.size; j++) {
    document.writeln("values: " + map.get(j) + "<br/>");
}

/* print put key-value from map with entries*/
var iterator = map.entries();
var i = 0;
for (i = 0; i < map.size; i++) {
    document.writeln(iterator.next().value + "<br/>");
}

/* print put key-value from map with forEach*/
function display(keys, values) {
    document.writeln(keys + " " + values + "<br/>");
}
map.forEach(display);