/**
 * The JavaScript string slice() method is used to fetch the part of the string and returns the new string.
 * It required to specify the index number as the start and end parameters to fetch the part of the string.The index starts from 0.
 * This method allows us to pass a negative number as an index.In such
 case, the method starts fetching from the end of the string.It doesn 't make any change in the original string.

 Syntax
 The slice() method is represented by the following syntax:

     string.slice(start, end)
 Parameter
 start - It represents the position of the string from where the fetching starts.

 end - It is optional.It represents the position up to which the string fetches.In other words, the end parameter is not included.

 Return
 Part of the string
 */

var stringSample = "phuocnguyenit97";
console.log(stringSample.slice(0, 5)) // output: phuoc
//**only the starting index. */
console.log(stringSample.slice(5)) // noutput: guyenit97
//**we will provide negative number as an index. In such case, the method starts fetching from the end of the string */
console.log(stringSample.slice(-4)) // output: it97, index each word: 7 -> -1, 9 -> -2 ...
//**we will provide negative number as a starting and ending index. In such case, the method starts fetching from the end of the string. */
console.log(stringSample.slice(-6, -2)) // output: enit