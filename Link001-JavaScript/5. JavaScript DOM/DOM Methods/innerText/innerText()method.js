/**
 * The innerText property can be used to write the dynamic text on the html document
 * Here, text will not be interpreted as html text but a normal text.
 * It is used mostly in the web pages to generate the dynamic content such as writing the validation message, password strength etc.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function validate() {
    var message
    if (document.myForm.userpassword.value.length > 8) {
        message = 'good'
    } else {
        message = 'poor'
    }
    document.getElementById('myLocation').innerText = message
}