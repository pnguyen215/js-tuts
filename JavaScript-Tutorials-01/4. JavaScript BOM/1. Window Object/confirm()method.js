function getConfirm() {
    var command = confirm('Are you sure? ')
    if (command === true) {
        window.alert('ok')
    } else {
        window.alert('cancel')
    }
}