/**
 * The JavaScript string substring() method fetch the string on the basis of provided index and returns the new sub string.
 * It works similar to the slice() method with a difference that it doesn 't accepts negative indexes.
 * This method doesn 't make any change in the original string.
 * 
 * Syntax
 The substring() method is represented by the following syntax:

     string.substring(start, end)
 Parameter
 start - It represents the position of the string from where the fetching starts.

 end - It is optional.It represents the position up to which the string fetches.

 Return
 Part of the string.

 */

var stringSample = "phuocnguyenit97";

console.log(stringSample.substring(0, 5)) // phuoc
//**fetch single character from the string. */
console.log(stringSample.substring(0, 1)) // p
//**only the starting index. */
console.log(stringSample.substring(5)) // nguyenit97
//**we will not pass any parameter with the method. In such case, the method returns the complete string */
console.log(stringSample.substring()) // phuocnguyenit97