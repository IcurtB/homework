let btn = document.getElementById('btn');
let input = document.querySelectorAll('.val')
const getValue = () => {
    for (let i of input) {
        if (i.value == '') {
            i.style.backgroundColor = 'red';
            i.placeholder = 'Это поле обязательно к заполнению ';
        } else {
            console.log(i.value)
        }
    }
}
btn.addEventListener('click', getValue)