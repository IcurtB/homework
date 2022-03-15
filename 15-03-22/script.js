const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1')

let second     = document.getElementById('secondName');
let name       = document.getElementById('name');
let middle     = document.getElementById('middleName');
let birth      = document.getElementById('date');
let livePlace  = document.getElementById('livePlace');
let inn        = document.getElementById('inn');
let date       = document.getElementById('date');
let contNum    = document.getElementById('contactNumber');
let eloAdd     = document.getElementById('electroAdres');
let bank       = document.getElementById('bankName');
let fact       = document.getElementById('fact');
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

const getFromFormOne = () => {
    if (orgName.value   !== '' &&
        position.value  !== '' &&
        payment.value   !== '' &&
        lastPay.value   !== '' &&
        phoneBuy.value  !== '' &&
        payCost.value   !== '' &&
        goods.value     !== '' &&
        typeCredit.value!== '' &&
        duration.value  !== '' &&
        mapDot.value    !== ''){
        const objTwo = {
            name1: orgName.value,
            position1: position.value,
            payment1: payment.value,
            lastPay1: lastPay.value,
            phoneBuy: phoneBuy.value,
            payCost: payCost.value,
            goods: goods.value,
            typeCredit: typeCredit.value,
            duration: duration.value,
            mapDot: mapDot.value,
        }
        localStorage.setItem('objTwo', JSON.stringify(objTwo))
        window.addEventListener('storage', event => {
            console.log(event)
        })
        let getObjTwo = localStorage.getItem('objTwo')
        console.log(getObjTwo)
    }

}
const getRedirect = (event) => {
    if(second.value    !== '' &&
        name.value     !== '' &&
        middle.value   !== '' &&
        birth.value    !== '' &&
        inn.value      !== '' &&
        date.value     !== '' &&
        contNum.value  !== '' &&
        livePlace.value!== '' &&
        eloAdd.value   !== '' &&
        bank.value     !== '' &&
        fact.value     !== '' ){
        let obj = {
            second    : second.value,
            name      : name.value,
            middle    : middle.value,
            birth     : birth.value,
            livePlace : livePlace.value,
            inn       : inn.value,
            date      : date.value,
            contNum   : contNum.value,
            eloAdd    : eloAdd.value,
            bank      : bank.value,
            fact      : fact.value,
        }
        localStorage.setItem('obj', JSON.stringify(obj));
        let raw = localStorage.getItem('obj');
        window.location.href = './form_two.html'

    }
}
if(btn){
    btn.addEventListener('click', getRedirect);
}
if(btn1){
    btn1.addEventListener('click',getFromFormOne )}






