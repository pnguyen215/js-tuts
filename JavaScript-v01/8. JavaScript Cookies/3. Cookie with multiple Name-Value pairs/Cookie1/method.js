function setCookie() {
    var info = 'Name= ' + document.getElementById('name').value + '; Email= ' + document.getElementById('email').value + '; phone= ' + document.getElementById('phone').value
    document.cookie = info
}

function getCookie() {
    if (document.cookie.length != 0) {
        alert(document.cookie)
        console.log(document.cookie)
    } else {
        alert('cookie is not available')
    }
}