let btn = document.querySelector('#btn');
let input  = document.querySelectorAll('input')
console.log(btn.value)

let obj = {}
const getValue = () => {
    for(let i of input){
        if (i.value == '') {
            i.style.boxShadow = '0 0 5px 1px red'
            i.placeholder = 'Это поле обязательно к заполнению'
            i.style.backgroundColor = '#f8d0d0a1'
        }else {
            console.log(i.value)
        }
    }
}

btn.addEventListener('click', getValue);
for(let i of input){
    i.addEventListener('focus', () => {
        i.classList.toggle('change')
    });
}




