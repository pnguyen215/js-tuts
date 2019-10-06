/**
 * The JavaScript string substr() method fetch the part of the given string and
 return the new string.
 The number of characters to be fetched depends upon the length provided with the method.
 This method doesn 't make any change in the original string.
 
 Syntax
The substr() method is represented by the following syntax:

string.substr(start,length)  
Parameter
start - It represents the position of the string from where the fetching starts.

length - It is optional. It represents the number of characters to fetch.

Return
Part of the string
 */

var stringSample = "phuocnguyenit97";
console.log(stringSample.substr(0, 5)) // phuoc
console.log(stringSample.substr(5)) // without starting index : nguyenit97

//**we will not pass any parameter with the method. In such case, the method returns the complete string. */
console.log(stringSample.substr())

//**we will provide negative number as a starting index. In such case, the method starts fetching from the end of the string. */

console.log(stringSample.substr(-10, 6)) // nguyen, explain: index : 
/**
 * phuocnguyenit97
 * 7 -> 0
 * 9 -> -1
 * t -> -2
 * i -> -3
 * ....
 * n -> -10
 */