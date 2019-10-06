/**
 * The innerHTML property can be used to write the dynamic html on the html document.
 * It is used mostly in the web pages to generate the dynamic html such as registration form, comment form, links etc
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// example 1
function methods() {
    var data = "Name:<br> <input type='text' name='name'> <br>Comment: <br> <textarea row='5' cols='80'></textarea> <br> <input type='submit' value='Post'>"
    document.getElementById('myLocation').innerHTML = data

}


// example 2
// Show/Hide Comment Form Example using innerHTML
var flag = true

function methods2() {
    var myForm = " <form action='Comment'> Enter Name: <br> <input type='text' name='name'> <br> Enter Email: <br> <input type='email' name='email'><br>Enter Comment: <br> <textarea rows='5' cols='70'> </textarea> <br>  <input type='submit' value='POST'></form>"
    if (flag) {
        document.getElementById("myLocation2").innerHTML = myForm
        flag = false
    } else {
        document.getElementById("myLocation2").innerHTML = ""
        flag = true
    }

}