/**
 * The JavaScript date setMilliseconds() method is used to set the milliseconds
 for a specified date on the basis of local time.

 Syntax
 The setMilliseconds() method is represented by the following syntax:

     dateObj.setMilliseconds(msValue)
 Parameter
 msValue - It represents an integer value between 0 and 999, specifying the millisecond.If the provided millisecond value is greater than 999, the setMilliseconds() method increments the second value accordingly.

 */

var ms = new Date()

console.log("Current milisecond: " + ms.getMilliseconds())

ms.setMilliseconds(900)

console.log("Update milisecond: " + ms.getMilliseconds())