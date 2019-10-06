/**
 * Date.setUTCMilliseconds(millisecondsValue)
 * millisecondsValue− A number between 0 and 999, representing the milliseconds
 */
var second = new Date("Aug 28, 2008 23:30:00")
console.log('current second: ' + second.getUTCMilliseconds())
second.setUTCMilliseconds(1024)
console.log('update second: ' + second.getUTCMilliseconds())