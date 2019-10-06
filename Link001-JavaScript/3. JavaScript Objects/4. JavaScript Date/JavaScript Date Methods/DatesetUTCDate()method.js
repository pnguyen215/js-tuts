/**
 * The JavaScript date setUTCDate() method is used to set the day of the Date object on the basis of universal time
 * If the given day value is outside the range of the month, the setUTCDate() method will adjust the Date object accordingly.
 * syntax: dateObj.setUTCDate(dayValue)
 * parameter: dayValue - It represents the day of the month.
 * 
 */

// example 1
var date = new Date()
console.log("Today's day: " + date.getUTCDate())
date.setUTCDate(30)
console.log('Update day: ' + date.getUTCDate())


// example 2
var date2 = new Date("August 15, 1947 20:22:10")
date2.setUTCDate(20)
console.log('Update day: ' + date2.getUTCDate())

//example 3: we will provide the day value more than the days present in the month
// In this case, the setUTCDate() will adjust the Date object to the next month.
var date3 = new Date("August 15, 1947 20:22:10")
console.log("Previous date: " + date3.getUTCDate() + "/" + (date3.getUTCMonth() + 1) + "/" + date3.getUTCFullYear())
date3.setUTCDate(33)
console.log("Update date: " + date3.getUTCDate() + "/" + (date3.getUTCMonth() + 1) + "/" + date3.getUTCFullYear())


// example 4
// we will provide the day value less than the days present in the month
// In this case, the setUTCDate() will adjust the Date object to the previous month.
var date3 = new Date("August 15, 1947 20:22:10")
console.log("Previous date: " + date3.getUTCDate() + "/" + (date3.getUTCMonth() + 1) + "/" + date3.getUTCFullYear())
date3.setUTCDate(0)
console.log("Update date: " + date3.getUTCDate() + "/" + (date3.getUTCMonth() + 1) + "/" + date3.getUTCFullYear())