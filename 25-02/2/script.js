let pr = prompt('Кто пришел?', 'Админ')


if (pr === null){
    alert('Вход отменен')
} else if (pr === 'Админ'){

    let pr1 = prompt('Пароль ?' )
    if (pr1 === null){
        alert('Вход отменен');
    } else if (pr1 === 'Чёрный властелин' || pr1 ==='Черный властелин'){
        alert('Добро пожаловать!')
    } else {
        alert('Я вас не знаю')
    }
} else {
    alert('Я вас не знаю')
}
