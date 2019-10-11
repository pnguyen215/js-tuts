/**
The JavaScript date getUTCDay() method returns the value of day of the week
for the specified date on the basis of universal time.The value of the day starts with 0 that represents Sunday
Return
An integer value between 0 and 6 that represents the days of the week
for the specified date.

*/

//**to print the value of today's weekday according to universal time. */
var $date = new Date()

console.log($date.getUTCDay())
/**
0 -> sunday
1-> Monday
2 -> tuesday
3 -> wednesday
4 -> thursday
...
*/