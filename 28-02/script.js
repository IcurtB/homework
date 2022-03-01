/**
 Напишите функцию hello(), которая при вызове будет возвращать строку
 «Привет, JavaScript!»
 **/

function hello() {
    return 'Привет, JavaScript!'
}
console.log(hello())

/**
 Нужно создать функцию, которая будет выводить куб числа на страничку.
 Число должно передаваться параметром.
 **/

function cube(a= 3) {
    return a ** 3;
}
console.log(cube(4))
/**
 Напишите функцию getName(), которая при вызове будет принимать переменную
 name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
 В случае отсутствующего параметра выводить «Привет, гость»
 **/

function getName(name='гость') {
    return `«Привет, ${name}»`;
}

console.log(getName("Василий"));


/**
 На старте вы получаете массив. Необходимо написать функцию, которая будет
 возвращать массив удвоенных значений исходного массива.
 Пример кода:
 example([1, 2, 3]) => [2, 4, 6]
 example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
 example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]
 **/

function example(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(1 < 10){
            arr[i] = arr[i] + arr[i]
        }
    }
    return arr
}

console.log(example([1, 2, 3]));
console.log(example([4, 1, 1, 1, 1, 4]));
console.log(example([2, 2, 2, 2, 2, 2]));


