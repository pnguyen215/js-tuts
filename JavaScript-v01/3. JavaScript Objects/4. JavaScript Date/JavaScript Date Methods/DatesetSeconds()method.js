/**
 * The JavaScript date setSeconds() method is used to set the seconds
 for a specified date on the basis of local time.
 Syntax
 The setSeconds() method is represented by the following syntax:

     dateObj.setSeconds(secValue[, msValue]]])
 Parameter
 secValue - It represents an integer value between 0 and 59, specifying the second.If the provided second value is greater than 59, the setSeconds() method increments the minute value accordingly

 msValue - It is optional.It represents an integer value between 0 and 999, specifying the millisecond.If the provided millisecond value is greater than 999, the setSeconds() method increments the second value accordingly.

 */

var minute = new Date()
console.log("Current minute: " + minute.getSeconds())
minute.setSeconds(20)
console.log(minute.getSeconds())