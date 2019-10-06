function setCookie() {
    document.cookie = "username = phuocnguyen; max-age = " + (60 * 60 * 24 * 365) + ";"
}

function getCookie() {
    if (document.cookie.length != 0) {
        var array = document.cookie.split('=')
        alert('name = ' + array[0] + ' value = ' + array[1])
    } else {
        alert('cookie is not availabel')
    }
}