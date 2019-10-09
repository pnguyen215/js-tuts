/**
 * 
 * In global context, variables are declared outside the function.Here, this keyword refers to the window object.
 */

var name = 'phuocngyuyen'

function info() {
    console.log(this.name)
}
info() // phuoccnguyen