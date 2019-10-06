function display() {
    var value = document.getElementById('color').value
    if (value != 'Select Color') { // get color from your option 
        document.bgColor = value
        document.cookie = 'color = ' + value
        // debugging
        console.log(value)
        console.log(document.cookie)

    }

    /**when you reloading your page  */
    window.onload = function () {
        if (this.document.cookie.length != 0) {
            var array = this.document.cookie.split('=') // split to get value of color name
            this.document.getElementById('color').value = array[1] // assign to color
            this.document.bgColor = array[1] // change background color 
        }
    }

}