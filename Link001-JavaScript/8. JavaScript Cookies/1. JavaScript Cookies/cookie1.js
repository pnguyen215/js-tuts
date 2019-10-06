/***
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

function setCookie() {
    document.cookie = "username=phuocnguyen"
}

function getCookie() {
    if (document.cookie.length != 0) {
        var array = document.cookie.split("=")
        alert('Name=' + array[0] + ' value=' + array[1])
    } else {
        alert('cookie is not available')
    }
}