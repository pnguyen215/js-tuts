/*
The JavaScript array push() method adds one or more elements to the end of the given array. This method changes the length of the original array.
Using syntax: 

*/
var collection_cars = ["audi"];
document.writeln("length of collection_cars before add item: " + collection_cars.length + "<br/>");
// add items 
collection_cars.push("bmw", "ferrari");
document.writeln("length of collection_cars after add item: " + collection_cars.length + "<br/>");
document.writeln("Update data collection_cars: " + collection_cars);