/**
 Дан массив с элементами [2, 3, 4, 5, 6, 7].
 С помощью цикла for найдите произведение элементов этого массива.
 Общий результат сохранить в объекте с соответствующим свойством.
 Например: 2 * 3 = 6 -> 6 * 4 и.т.д.**/
let arr = [2, 3, 4, 5, 6, 7];
console.log(arr)
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (newArr.length < 1) {
        newArr.push(arr[0] * arr[1]);
    } else if(newArr.length < (arr.length - 1)){
        newArr.push(newArr[i - 1] * arr[i +1])
    } else if (newArr.length === arr.length) {
        newArr.push(newArr[i - 1] * arr[i])
    }
}
console.log(newArr)


/**
 Напишите функцию, которая заполняет новый массив предоставленным значением
 и затем ее возвращает. Функция должна первым параметром принимать
 элемент (значение для массива), вторым параметром размер массива.
 Например: myFunc('a', 3)   // ['a', 'a', 'a']
 **/
let secondExArr = []
function arrPush(a = 'a', b = 1) {
    for (let i = 0; i < b; i++) {
        secondExArr.push(a)
    }
}
arrPush('a', 3)
console.log(secondExArr)

/**Напишите функцию, которая разворачивает массив в обратном порядке
 и затем ее возвращает.  Функция наша  принимает массив любых элементов.
 Например:
 const data = [1, 2, 3];
 myFunc(data);  // [3, 2, 1];**/
console.log('Этот способ я нашёл в инете. По другому даже как не знаю, только если методом reverse()')

let data = [1, 2, 3];
function reverse(array) {
    let reverseArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArr.push(array[i])
    }
    return reverseArr
}
console.log(reverse(data))


data.reverse()
console.log(data)