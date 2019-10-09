var num1 = new ArrayBuffer(10)
var num2 = new ArrayBuffer(10)

var assign1 = new DataView(num1)
var assing2 = new DataView(num2)

assign1.setFloat64(1, 3.754)

console.log(assign1.getFloat64(1))
console.log(assing2.getFloat64()) // no value: 0