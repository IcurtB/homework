let form2 = document.querySelector('form');


//
form2.onsubmit = (event) => {
    event.preventDefault();
    let orgName    = document.querySelector('#orgName');
    let position   = document.querySelector('#pos');
    let payment    = document.querySelector('#pay');
    let lastPay    = document.querySelector('#lastPay');
    let phoneBuy   = document.querySelector('#phoneBuy');
    let payCost    = document.querySelector('#payCost');
    let goods      = document.querySelector('#masCredit');
    let typeCredit = document.querySelector('#type');
    let duration   = document.querySelector('#creditDuration');
    let mapDot     = document.querySelector('#mapDot');

    let massive = [
        orgName, position, payment, lastPay,
        phoneBuy, payCost, goods, typeCredit,
        duration, mapDot
    ];
    for (let i = 0; i < massive.length; i++) {
        console.log(massive[i].value)
    }
}
// console.log(form2)