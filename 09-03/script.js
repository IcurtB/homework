let btn = document.querySelector('#btn');

let one = (option) => {
    btn.style.backgroundColor = '#cfe2ff';
    btn.style.borderColor = '#b6d4fe';
    btn.style.color = '#084298';
    btn.textContent = option.text;
}
let two = (option) => {
    btn.style.backgroundColor = '#e2e3e5';
    btn.style.borderColor = '#d3d6d8';
    btn.style.color = '#41464b';
    btn.textContent = option.text;
}
let three = (option) => {
    btn.style.backgroundColor = '#d1e7dd';
    btn.style.borderColor = '#badbcc';
    btn.style.color = '#0f5132';
    btn.textContent = option.text;
}
let four = (option) => {
    btn.style.backgroundColor = '#f8d7da';
    btn.style.borderColor = '#f5c2c7';
    btn.style.color = '#842029';
    btn.textContent = option.text;
}
let five = (option) => {
    btn.style.backgroundColor = '#fff3cd';
    btn.style.borderColor = '#ffecb5';
    btn.style.color = '#664d03';
    btn.textContent = option.text;
}
let six = (option) => {
    btn.style.backgroundColor = '#cff4fc';
    btn.style.borderColor = '#b6effb';
    btn.style.color = '#41464b';
    btn.textContent = option.text;
}
let seven = (option) => {
    btn.style.backgroundColor = '#fefefe';
    btn.style.borderColor = '#fdfdfe';
    btn.style.color = '#636464';
    btn.textContent = option.text;
}
let eighth = (option) => {
    btn.style.backgroundColor = '#d3d3d4';
    btn.style.borderColor = '#bcbebf';
    btn.style.color = '#141619';
    btn.textContent = option.text;
}
btn.addEventListener('click', () => {
    setTimeout(() => {
        one({text:'A simple primary alert—check it out!'})
    }, 1500)
    setTimeout(() => {
        two({text:'A simple secondary alert—check it out!'})
    }, 3000)
    setTimeout(() => {
        three({text:'A simple success alert—check it out!'})
    }, 4500)
    setTimeout(() => {
        four({text:'A simple danger alert—check it out!'})
    }, 6000)
    setTimeout(() => {
        five({text:'A simple warning alert—check it out!'})
    }, 7500)
    setTimeout(() => {
        six({text:'A simple info alert—check it out!'})
    }, 9000)
    setTimeout(() => {
        seven({text:'A simple light alert—check it out!'})
    }, 10500)
    setTimeout(() => {
        eighth({text:'A simple dark alert—check it out!'})
    }, 12000)


})
