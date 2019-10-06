/*
The JavaScript string indexOf() method is used to search the position of a particular character or string in a sequence of given char values. 
This method is case-sensitive.
The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.


*/

// exmaple 
var stringName = "phuocnguyenit97 SE";
document.writeln(stringName.indexOf('p') + "<br/>");
document.writeln(stringName.indexOf('n', 3) + "<br/>");
document.writeln(stringName.indexOf("SE") + "<br/>");
document.writeln(stringName.indexOf("SE", 3) + "<br/>");
document.writeln(stringName.indexOf("se") + "<br/>"); // print out -1
