/**
 * dateObj.setUTCSeconds(secValue[, msValue]]])
 * secValue - It represents an integer value between 0 and 59, specifying the second
 * If the provided second value is greater than 59, the setUTCSeconds() method increments the minute value accordingly
 * msValue - It is optional.It represents an integer value between 0 and 999, specifying the millisecond
 * If the provided millisecond value is greater than 999, the setUTCSeconds() method increments the second value accordingly
 * 
 */

// example 1
var seconds = new Date()
console.log('current second: ' + seconds.getUTCSeconds())
console.log('current minute: ' + seconds.getUTCMinutes())
seconds.setUTCSeconds(60) // value >= 59, so minute increased by 1
console.log('update, get minute: ' + seconds.getUTCMinutes())

// example 2
seconds = new Date("August 15, 1947 20:22:10")
seconds.setUTCSeconds(23, 1024) // value of milisecond >= 999, so minute increased by 1
console.log('update second: ' + seconds.getUTCSeconds())
console.log('update, get minute: ' + seconds.getUTCMinutes())