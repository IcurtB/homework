/**
 Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
 значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
 (не считая значения 99) и вывести эту информацию на экран.

 ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4
 **/

let btnStart = document.getElementById('start');
let btnResult = document.getElementById('result');
let btnNumber = document.getElementById('number');
let btnSum = document.getElementById('sum');
let btnDate = document.getElementById('date');
let result = 0;
let prm;
let i = 0;


let getNumber = () => {
    prm = prompt('Введите число')
    while (prm != 99){
        result++;
        prm = prompt('Введите число!')
    }
    return result
}
btnStart.onclick = getNumber;
btnResult.onclick = () => {
    alert('Количество попыток - ' + result)
}
/**
 Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
 значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
 чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
 на экран.

 ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290**/


let getSum = () => {
    let number = 0;
    prm = prompt('Введите число!');
    while (prm != 999){
        number += Number(prm)
        i++
        prm = prompt('Добавьте число!');
    }
    return alert('Сумма всех чисел - ' + number)
}
btnNumber.onclick = getSum;
btnSum.onclick = () => {
    alert('Количество попыток - ' + i)
}

/**
 Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
 а второе – нынешний (текущий) год.
 Программа должна вывести на экран возраст ученика (в целых годах).

 ввод: 2006, 2018 ⇒ вывод: вам 12 лет)**/


let date = new Date()

let getDate = () => {
    let year = 0;
    let month = 0;
    let day = 0;
    let i = 0
    while (i<3) {
        if (i < 1) {
            year =  prompt('Введите год рождения');
            i++
        } else if (i < 2) {
            month = prompt('Введите месяц рождения');
            i++
        } else {
            day = prompt('Введите день рождения!');
            i++
        }
        console.log(i)
    }
    return alert(`вам ${date.getMonth() - year}`)
}
btnDate.onclick = getDate;