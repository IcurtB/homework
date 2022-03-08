const alertElem = document.querySelector('.alert');

const alert = {
    open: () => alertElem.classList.add('go'),
    close: () => alertElem.classList.remove('go')
}

setTimeout(() => {
    alert.open()
    setTimeout(() => {
        alert.close()
    }, 1500)
},2000)