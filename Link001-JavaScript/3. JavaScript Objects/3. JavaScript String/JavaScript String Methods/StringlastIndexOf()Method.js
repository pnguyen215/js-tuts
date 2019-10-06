/*
The JavaScript string lastIndexOf() method is used to search the position of a particular character or string in a sequence of given char values.
It behaves similar to indexOf() method with a difference that it start searching an element from the last position of the string.
The lastIndexOf() method is case-sensitive. The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.


*/

// example 
var stringName = "phuocnguyenit97 SE";
document.writeln(stringName.lastIndexOf('p') + "<br/>");
document.writeln(stringName.lastIndexOf('n', 3) + "<br/>");
document.writeln(stringName.lastIndexOf("SE") + "<br/>");
document.writeln(stringName.lastIndexOf("SE", 3) + "<br/>");
document.writeln(stringName.lastIndexOf("se") + "<br/>"); // print out -1