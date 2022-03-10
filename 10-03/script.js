let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let result = document.getElementById('btnResult')


let i = 1;

// setInterval(function () {
//     console.log(i++)
// }, 1000)

// btn1.addEventListener('click', () => {
//     result.textContent()
// })
// const start = (option) => {
//     setInterval(function () {
//         result.textContent = i;
//         i++;
//     }, 1000)
//
// }
//
let start1
function start() {
     start1 = setInterval(function () {
        result.textContent = i;
        i++;
    }, 1000)
}
btn1.onclick = start

// const stop = () => {
//     clearInterval(start)
// }
// btn2.onclick = () => {
//     stop
//     console.log('asd')
// }
// const stop = () => {
//     setInterval(function () {
//         result.textContent = --i
//     }, 1000)
// }
// btn2.onclick = stop
// btn3.onclick = () => {
//     i = 1
// }
btn2.onclick = () => {
    clearInterval(start1)
}
btn3.onclick = () => {
    result.textContent = i =1}