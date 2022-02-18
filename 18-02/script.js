/**Переделать этот код так, чтобы в нем были операторы <br>
 инкремента и декремента:
 let num = 10;
 num = num + 1;
 num = num + 1;
 num = num - 1;
 console.log(num);**/
let num = 10;
let num1 = 10;
// num = num + 1;
num++
console.log(num)
// num = num + 1;
++num
// num1 = num - 1;
num1--
console.log(num)
console.log(num1)

/** Создайте переменную name и присвойте ей ваше имя.
 Выведите на экран строку'Привет, %Имя%!'. **/

let name = 'Бексултан'
console.log(`Привет, ${name}!`)

/**Создайте переменную age и присвойте ей ваш возраст.
 Выведите на экран 'Мне %Возраст% лет!'.**/
let age = 23;
console.log(`Мне ${age} лет!`)

/**Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат
 присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
 Сложите переменные c и d, а результат запишите в переменную result.
 Выведите на экран значение переменной result**/
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result)

let number = 47;
// num = num + 7;
number+=7;
console.log('number+=7: '+number)
// num = num - 18;
number-=18;
console.log('number-=18: '+number)
// num = num * 10;
number*=10;
console.log('number*=10: '+number)
// num = num / 15;
number/=15;
console.log('number/=15: '+number)