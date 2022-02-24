/**
 Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
 на экран строку 'a+b, c+d'.**/
let arr = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]} `)

/**
Создайте массив с элементами 10, 15, 9, 10.
- Умножьте первый элемент массива на второй,
    - а третий элемент на четвертый.
    Результаты сложите, присвойте переменной result.
    Выведите на экран значение этой переменной.**/
let num = [10, 15, 9, 10];
// console.log(num[0] * num[1])
// console.log(num[2] * num[3])
let result = num[0] * num[1] +  num[2] * num[3]
console.log(result)

/**Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.**/

let mass = ['a', 'b', 'c'];
mass.push(1, 2, 3)
console.log(mass)

/**Создайте массив с различными числами. Должно быть как минимум 10 элементов
 внутри массива. С помощью цикла пройдитесь по каждому из них и у умножьте на 2.**/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++){
    console.log(numbers[i] * 2 );
}


/** Выведите на консоль имена массива **/
let users = ['Maks', 'Dima', 'Sasha', 'Jenya', 'beris', 'Huba', 'Bekas','beris', 'Huba', 'Bekas','beris', 'Huba', 'Bekas', 'daniyar' ];
for (let i = false; users != false;){
    console.log(users[1] )
    users.shift()

}