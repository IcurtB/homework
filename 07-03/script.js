let alertBtn = document.querySelector('#alert');
let push = document.querySelector('.push_alert')

let alert = {
    open: () => push.classList.add('go'),
    close: () => push.classList.remove('go')
}


alertBtn.onclick = () => {
    alert.open()
    setTimeout(() => {
        alert.close()
    }, 1500)
}
