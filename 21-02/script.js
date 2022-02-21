// 1)Переделайте приведенный код так, чтобы в нем использовались операции
//     +=, -=, *=, /=, ++, --.
// Количество строк кода при этом не должно измениться.
//     Код для переделки:
//     let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);


let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
--num;
alert(num);

// 2)Переделайте этот код так, чтобы в нем использовались операции ++ и --.
// Количество строк кода при этом не должно измениться.
//     var num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num);


let num1 = 10;
num1++;
++num1;
--num1;
alert(num1)


// Реализовать примеры на все 4 комбинации логическим операторам && и ||
/** Возвращает true, если обе операции сравнения возвращают true, иначе возвращает false **/
let bol1 = true, bol2 = false;
let bol3 = false, bol4 = false;
let bol5 = true, bol6 = true;
let result1 = bol1 && bol2;
let result2 = bol3 && bol4;
let result3 = bol5 && bol6;
console.log("Возвращает true, если обе операции сравнения возвращают true, иначе возвращает false")
console.log(result1)
console.log(result2)
console.log(result3)
console.log('-------------------')

/*Возвращает true, если хотя бы одна операция сравнения возвращают true, иначе возвращает false*/

let other = true, other1 = false, other2 =false ;

let result4 = other || other1
let result5 = other2 || other1
console.log("(||) Возвращает true, если хотя бы одна операция сравнения возвращают true, иначе возвращает false")
console.log(result4)
console.log(result5)


let a = 1
let b =0;
console.log("a &&= b возвращает b, если и a и b равны true. Если какой-то из операндов равен false, то возвращается a. Аналогично выполнению a = a && b\n")
a &&= 2;
console.log(a);
b &&= 1;
console.log(b);
console.log("a ||= b эквивалентно выражению a = a || b")
let c = true;
let d = false;

c ||= d;
console.log(c);
c = c || d;
console.log(c)

