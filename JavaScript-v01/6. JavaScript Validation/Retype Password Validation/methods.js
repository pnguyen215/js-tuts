/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function validateForm() {
    var username = document.myForm.name.value;
    var password = document.myForm.password.value;

    if (username === null || username === "") {
        window.alert("name can not be blank!");
        window.location = ""
        return false;
    } else if (password.length < 6) {
        window.alert("Password must be at least 6 characters long ");
        window.location = ""
        return false;
    }
}

function matchPassword() {
    var password = document.myForm2.password.value
    var repassword = document.myForm2.repassword.value

    if (password === repassword) {
        return true
    } else {
        window.alert('Password must be same!')
        window.location = "" // refresh 
        return false
    }
}