function setCookie() {
    document.cookie = "name = phuocnguyen;max-age = 0"
}

function getCookie() {
    if (document.cookie.length != 0) {
        alert('cookie is available')
    } else {
        alert('cookie is not available')
    }
}