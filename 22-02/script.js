/**Если переменная x равна 7, то выведите окошко
 с сообщением 'Верно', иначе выведите 'Неверно'.**/

let x = 7;
if(x === 7){
    alert('Верно');
}else {
    alert('Неверно');
}

/**Если переменная a равна или меньше 1, а переменная b больше или равна 3,
 то выведите сумму этих переменных, иначе выведите их результат вычитания.**/

let a = 1;
let b = 2;
if( a <= 1 && b >= 3){
    alert(a + b)
} else {
    alert(b - a)
}
/** В переменной time лежит число от 0 до 59. Определите в какую четверть
 часа попадает это число (в первую, вторую, третью или четвертую).
 Например: если переменная time = 5, то она попадает в первую четверть.
 В противном случае вывести "Значение не попадает в диапазон от 0 до 59".**/
let time = 60;
if(time>=0 && time <= 15){
    alert(`Первая четварть ${time}`)
}else if(time>=16 && time <= 30) {
    alert(`Вторая четверть ${time}`)
}else if(time>=31 && time <= 45) {
    alert(`Третья четверть ${time}`)
}else if(time>=46 && time <= 59) {
    alert(`Четвертая часть ${time}`)
}else if(time>59){
    alert("Значение не попадает в диапазон от 0 до 59")
}
/**Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
 Проверьте работу скрипта при test, равном true, false.
 Напишите два варианта скрипта - с короткой записью и с длинной.**/

let test = true;
if(test != true){
    alert('Верно')
} else {
    alert('Неверно')
}
/**---------------**/
let test1 = false;
let result = test1 != true? 'Верно': 'Неверно'
alert(result)