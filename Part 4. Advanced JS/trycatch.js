let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    //let user = JSON.parse(data);
    /*console.log('Начинаем работу'); //выполнение кода, если нет ошибок, то блок catch игнорируется
    console.log(a);
    console.log('Результат');*/
    console.log(user);

    if(!user.name) {
        throw new Error("В этих данных нет имени!"); //мы можем сами писать ошибки для каждых случаев
    }

} catch (error) {
    console.log(error); //у ошибки 3 свойства
    console.log(error.name); //тип
    console.log(error.message); //определение
    console.log(error.stack); //место в коде

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('А я буду работать всегда'); //выполниться в любом случае (необязательный параметр)
}

console.log('А я буду работать дальше');