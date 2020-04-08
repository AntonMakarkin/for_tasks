//Инкапсуляция - сокрытие. Получение данных с помощью методов геттеров и установка  значений с помощью сеттеров


function User(name, age) {
    this.name = name;
    //this.age = age; //без инкапсуляции
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        }
        else {
            console.log("Недопустимое значение");
        }
    }
}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
//console.log(ivan.age);
console.log(ivan.userAge); //пытаемся обратиться к свойству напрямую - не получается
console.log(ivan.getAge());

/*ivan.age = 30;
ivan.name = "Alex";
console.log(ivan.name);
console.log(ivan.age);*/

ivan.setAge(30);
console.log(ivan.getAge());
ivan.say();

//Модули
//Преимущества:
// 1)Независимость и самодостаточность
// 2)Чистота глобального пространства имен
// 3)Повтороно использование

//Анонимная самовызывающаяся функция
let number = 1;

(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}()); //вызов ф-ции

console.log(number);

//Использование обьектного интерфейса

let user = (function() {
    let privat = function() {
        console.log('I am privat');
    };

    return {
        sayHello : function() {
            console.log('Hello');
        }
    };
}());

console.log(user);
console.log(user.sayHello());

//Третий вариант

let user = (function () {
    let privat = function () {
        console.log('I am privat');
    };

    let sayHello = function() {
        console.log('Hello');
    };

    return {
        sayHello: sayHello
    };
}());

console.log(user);
console.log(user.sayHello());