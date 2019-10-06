/**
The JavaScript DataView.getFloat32() is an inbuilt method in dataView.
It is used to get a signed 32 - bit float number at a specified location.
syntax: 
dataview.getFloat32(byteOffset)
parameter:
byteoffset: The offset, in a byte, from the start of the view where to read the data.
return:
This method returns a signed 32 - bit float number.
*/

// example 1
var num1 = new ArrayBuffer(8) // creating a ArrayBuffer
var assignValue1 = new DataView(num1) // creating a view 

assignValue1.setFloat32(1, 23.45) // put value into assignValue1 at slot 1
assignValue1.setFloat32(2, Math.PI)

console.log(assignValue1.getFloat32(1)) // get value of assignValue1 at slot 1
console.log(assignValue1.getFloat32(2))