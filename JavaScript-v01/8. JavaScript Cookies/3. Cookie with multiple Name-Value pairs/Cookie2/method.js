/**
 * 
 * Let 's see an example to store different name-value pairs in a cookie using JSON
 */

function setCookie() {
    var object = {}
    // this object to save info user
    object.name = document.getElementById('name').value;
    object.email = document.getElementById('email').value;
    object.phone = document.getElementById('phone').value;
    var json = JSON.stringify(object);
    // converting js to JSON string
    document.cookie = json;
    console.log(json)
}

function getCookie() {
    if (document.cookie.length != 0) {
        var object2 = JSON.parse(document.cookie);
        console.log(object2)
        alert('name = ' + object2.name + 'email = ' + object2.email + 'phone = ' + object2.phone)
    } else {
        alert('cookie is not available')
    }
}