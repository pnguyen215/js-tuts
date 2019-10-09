var num1 = new ArrayBuffer(10)
var num2 = new ArrayBuffer(10)

var assing1 = new DataView(num1)
var assing2 = new DataView(num2)

assing1.setUint8(1, 12.75)

console.log(assing1.getUint8(1))
console.log(assing2.getUint8(1))