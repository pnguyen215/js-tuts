var num1 = new ArrayBuffer(10)
var num2 = new ArrayBuffer(10)

var assign1 = new DataView(num1)
var assign2 = new DataView(num2)

assign1.setInt16(1, 7.42)

console.log(assign1.getInt16(1))
console.log(assign2.getInt16()) // 0