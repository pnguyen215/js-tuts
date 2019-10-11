/**
 * dateObj.setUTCMinutes(minValue[, secValue[, msValue]]])
 * minValue - It represents an integer value between 0 and 59, specifying the minutes.
 * If the provided minute value is greater than 59, the setUTCMinutes() method increments the hour value accordingly.
 * secValue - It is optional.It represents an integer value between 0 and 59, specifying the seconds
 * If the provided second value is greater than 59, the setUTCMinutes() method increments the minute value accordingly
 * msValue - It is optional.It represents an integer value between 0 and 999, specifying the milliseconds.
 * If the provided millisecond value is greater than 999, the setUTCMinutes() method increments the second value accordingly.
 * 
 */
var minute = new Date()
console.log('current minute: ' + minute.getUTCMinutes())
minute.setUTCMinutes(35)
console.log('update minute: ' + minute.getUTCMinutes())

// 
minute = new Date("August 15, 1947 20:22:10 GMT+5:30")
minute.setUTCMinutes(36, 64) // minute increase by 1
console.log('update minute: ' + minute.getUTCMinutes())