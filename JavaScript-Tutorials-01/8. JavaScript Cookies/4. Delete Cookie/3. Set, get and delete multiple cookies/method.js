function setCookie1() {
    document.cookie = "username= phuocnguyen"
    cookie1 = document.cookie
}

function getCookie1() {
    if (cookie1.length != 0) {
        alert(cookie1)
    } else {
        alert('cookie1 is not available')
    }
}

function deleteCookie1() {
    document.cookie = cookie1 + ";max-age = 0"
    cookie1 = document.cookie
    alert('cookie1 is deleted!')
}

function setCookie2() {
    document.cookie = "username= david"
    cookie2 = document.cookie
}

function getCookie2() {
    if (cookie2.length != 0) {
        alert(cookie2)
    } else {
        alert('cookie2 is not available')
    }
}

function deleteCookie2() {
    document.cookie = cookie2 + ";max-age = 0"
    cookie2 = document.cookie
    alert('cookie2 is deleted!')
}