/**
 * While converting the string to lowercase letter the result may vary due to conflicts between different languages.
 * In Western languages the letter 'i'
 * upper cases to letter 'I'
 * while in Turkish the letter 'i'
 * uppercases to dotted letter '?'.
 * To overcome these problems, we can use toLocaleLowerCase() method.
 * JavaScript string toLocaleLowerCase() method converts the string to lowercase letter on the basis of host 's current locale.
 * In most cases, this method returns the similar result as the toLowerCase() method.

 */

var $stringSample = "PHUOCNGUYENIT97"
console.log($stringSample.toLocaleLowerCase())
//** */
var $stringOther = new String("PHUOCNGYENIT97")
console.log($stringOther.toLocaleLowerCase())