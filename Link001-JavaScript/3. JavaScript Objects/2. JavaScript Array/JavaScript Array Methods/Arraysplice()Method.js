/*
The JavaScript array splice() method is used to add/remove the elements to/from the existing array.
 It returns the removed elements from an array. The splice() method also modifies the original array.
 Using syntax: 
 array.splice(start,delete,element1,element2,?,elementn) 
 Parameter: 
 start - It represents the index from where the method start to extract the elements.

delete - It is optional. It represents the number of elements to be removed.

element1,element2,...,elementn - It is optional. It represent the elements to be inserted.


*/
// example 1
/*add an element to the existing array without removing other elements.*/
var collection_cars = ["audi", "bmw", "bently", "lamborghini"];
document.writeln(collection_cars + "<br/>");
var result1 = collection_cars.splice(1, 0, "mescedes"); // start from 1st position
document.writeln(collection_cars + "<br/>");
/*to add an element to the existing array while removing other elements.*/
var result2 = collection_cars.splice(3, 1, "ford"); // begin with 3rd position and remove 1 element, and add 1 element is ford
document.writeln(collection_cars + "<br/>");
var result3 = collection_cars.splice(1); // remove from 1st position until the end of array

/* print out*/
document.writeln(collection_cars);