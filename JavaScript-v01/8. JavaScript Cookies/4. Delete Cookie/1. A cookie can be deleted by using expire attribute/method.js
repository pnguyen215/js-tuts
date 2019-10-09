function setCookie() {
    document.cookie = "name = phuocnguyen;expires =  Sun, 4 Oct 2019 12:00:00 UTC"
}

function getCookie() {
    if (document.cookie.length != 0) {
        alert('cookie is available')
    } else {
        alert('cookie is not available')
    }
}