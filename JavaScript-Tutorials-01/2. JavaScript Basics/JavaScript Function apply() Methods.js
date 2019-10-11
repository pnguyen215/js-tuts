// JavaScript Function apply() method Example
// to determine the maximum element
var array = [9, 63, 2, 7, 5]
var maxValue = Math.max.apply(null, array)
console.log(maxValue)

// to determine the minimum element.
var minValue = Math.min.apply(null, array)
console.log(minValue)


//  to join array of different type
var stringArray = ["monday", "tuesday", "wednesday", "thursday", "friday"]
array.push.apply(array, stringArray)
console.log(array.toString())