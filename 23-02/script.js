/**
Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.**/

let userSalaries = {
    ella: 15500,
    sophia: 20000,
    ellie: 30000,
}

alert(`Зарплата Элли ${userSalaries.ella}`)
alert(`Зарплата Софии ${userSalaries.sophia}`)

/**
Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.**/
let numbers  = {
    a: 5,
    b: 6,
    c: 10,
}
alert(numbers.a + numbers.b + numbers.c)

/**
let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора**/
// let data = true
// let number = data === true?  3: 5;
// alert(number)

/** Используя конструкцию if...else , напишите код который будет спрашивать: "Кто такой В.В. ПУТИН?"
    Если посетитель вводит "Президент", то выводить "Верно!", если что=-то другое - выводить "Не знаете ?"
 **/
let president = 'Президент';
if(prompt("Кто такой В.В. ПУТИН?", president)){
    alert("Верно")
}else{
    alert("Не знаете ?")
}
