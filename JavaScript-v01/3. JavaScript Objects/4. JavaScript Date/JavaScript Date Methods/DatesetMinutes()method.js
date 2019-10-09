/**
 * The JavaScript date setMinutes() method is used to set the minutes
 for a specified date on the basis of local time.

 Syntax
 The setMinutes() method is represented by the following syntax:

     dateObj.setMinutes(minValue[, secValue[, msValue]]])
 Parameter
 minValue - It represents an integer value between 0 and 59, specifying the minutes.If the provided minute value is greater than 59, the setMinutes() method increments the hour value accordingly.

 secValue ? It is optional.It represents an integer value between 0 and 59, specifying the seconds.If the provided second value is greater than 59, the setMinutes() method increments the minute value accordingly

 msValue ? It is optional.It represents an integer value between 0 and 999, specifying the milliseconds.If the provided millisecond value is greater than 999, the setMinutes() method increments the second value accordingly.
 */
var minute = new Date()

console.log("Current minute: " + minute.getMinutes())

minute.setMinutes(59)

console.log("Update minute: " + minute.getMinutes())