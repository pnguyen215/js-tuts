/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function validate() {
    var email = document.myForm.email.value
    var start = email.indexOf('@')
    var end = email.lastIndexOf('.')
    if (start < 1 || end < start + 2 || end + 2 >= email.length) {
        window.alert('Please enter a valid email address!')
        setTimeout(() => {
            window.location = ""
        }, 1000);
        return false
    }
}