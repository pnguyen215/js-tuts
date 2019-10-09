/*
The JavaScript array unshift() method adds one or more elements in the beginning of the given array and returns the updated array. This method changes the length of the original array.

*/

// example 

var collection_cars = ["audi", "bmw", "bently", "ferrari", "lamborghini"];
document.writeln("length of arrays before add a lot of elements:  " + collection_cars.length + "<br/>");
var result1 = collection_cars.unshift("mercedes", "nissan");

document.writeln("length of arrays after add a lot of elements:  " + collection_cars.length + "<br/>");
document.writeln("Update arrays: " + collection_cars);