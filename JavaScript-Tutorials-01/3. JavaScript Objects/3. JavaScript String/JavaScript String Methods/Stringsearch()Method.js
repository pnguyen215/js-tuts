/*
The JavaScript string search() method is used to search the regular expression in the given string. This method returns -1, if match is not found.


*/

// example 
var stringSample = "JavaScript is a scripting language so easy to learn! Easy, javaScript is a language so important for everyone!";
console.log(stringSample.search("language"));
console.log(stringSample.search(/Easy/)); //  is case-sensitive
console.log(stringSample.search(/Easy/i)); // We can ignore case-sensitive behaviour of search() method by using ignore flag