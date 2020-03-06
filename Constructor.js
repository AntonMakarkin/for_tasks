//Конструкторы нужны для создания новых однотипных обьектов

/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello ' + this.name);
    };
}

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();*/

//Контексты вызова

function showThis() {
    console.log(this);
    function sum() {
        console.log(this);
        //return this.a + this.b;
        return a + b; //пример с замыканием - функция не видит переменные и ищет их на слой выше
    }
    console.log(sum());
}
showThis(4,5);
showThis(5,5);


//Код на ЕS6
/*class Users {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}
let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();*/