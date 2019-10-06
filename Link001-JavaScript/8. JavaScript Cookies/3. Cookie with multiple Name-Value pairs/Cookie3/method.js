/**
 * 
 * Let 's see an example to store each name-value pair in a different cookie
 */

function setCookie() {
    document.cookie = document.getElementById('name').value
    document.cookie = document.getElementById('email').value
    document.cookie = document.getElementById('phone').value


}

function getCookie() {
    if (document.cookie.length != 0) {
        alert('Name=' + document.getElementById('name').value + ' email=' + document.getElementById('email').value + ' phone=' + document.getElementById('phone').value)
        console.log('Name=' + document.getElementById('name').value + ' email=' + document.getElementById('email').value + ' phone=' + document.getElementById('phone').value)
    } else {
        alert('cookie is not available')
    }
}