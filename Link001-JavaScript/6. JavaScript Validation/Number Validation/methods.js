function validate() {
    var number = document.myForm.number.value
    if (isNaN(number)) {
        document.getElementById('num').innerHTML = "enter numberic value only"
        setTimeout(function () {
            window.location = ""
        }, 1000) // after 1 second 
        return false
    } else {
        return true
    }
}