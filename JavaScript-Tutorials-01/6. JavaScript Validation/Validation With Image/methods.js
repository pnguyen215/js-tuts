function validate() {

    var name = document.myForm.name.value
    var password = document.myForm.password.value
    var status = false

    // check: username
    if (name.length < 1) {
        document.getElementById('numspan').innerHTML = "<img src='uncheck.jpg'/> Please enter your name!"
        setTimeout(() => {
            window.location = ""
        }, 1000);
        status = false
    } else {
        document.getElementById('numspan').innerHTML = "<img src='check.png'/>"
        status = true
    }
    // check: password
    if (password.length < 6) {
        document.getElementById('passwdspan').innerHTML = "<img src='uncheck.jpg'/> Please enter your password!"
        setTimeout(() => {
            window.location = ""
        }, 1000);
        status = false
    } else {
        document.getElementById('passwdspan').innerHTML = "<img src='check.png'/>"
        status = true
    }
    return status



}