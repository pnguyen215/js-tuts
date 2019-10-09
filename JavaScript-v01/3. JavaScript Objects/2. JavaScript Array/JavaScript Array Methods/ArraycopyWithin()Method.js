/*
The JavaScript array copyWithin() method copies the part of the given array with its own elements and returns the modified array. This method doesn't change the length of the modified array.


Using syntax:
array.copyWithin(target, start, end) 
Parameter
target - The position where the copied element takes place.

start - It is optional. It represents the index from where the method starts copying elements. By default, it is 0.

end - It is optional. It represents the index at which elements stops copying. By default, it is array.length-1.

*/

var arrays = ["Audi", "BMW", "Mescedes", "Wolkgen"];
//
var result1 = arrays.copyWithin(0, 1, 2);
document.write(result1 + "<br/>");
var result2 = arrays.copyWithin(1, 2);
document.write(result2 + "<br/>");
var result3 = arrays.copyWithin(2);
document.write(result3 + "<br/>");