let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`)
}
fetchData('something');

//read operator (заворачивает в массив)
function max (...numbers) {
    console.log(numbers);
}
max(3,4,67);

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];
     
const res = Math.max(...arr1, ...arr2);
console.log(res);

const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
}
//const res = Object.assign(user, admin); //cоздает новый обьект из двух с перезаписыванием
//const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

const x = 25, y = 10;
const coords = {
    x: x,
    y: y
}
console.log(coords);

const x = 25, y = 10;
const coords = {
    x,
    y,
    calcSq() {
        console.log(this.x * this.y);
    }
}

coords.calcSq();
console.log(coords);

//Деструктуризация

const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

//const userName = user.name;

const {name: {first, second}, pass, rights} = user;
console.log(first, second);


function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    port: 2000,
    host: 'hsidshd'
})

connect();


const numbers = [3, 5, 6, 6];
const [a, b, c] = numbers;
console.log(a, b, c);

const numbers = [3, 5, 6, 6];
const [, , c] = numbers;
console.log(c);

//деструктуризация сложных массивов
const numbers = [[3, 5], [6, 6]];
const [[a, b], [c, d]] = numbers;
console.log(a, b, c, d);

const country = {
    name: 'England',
    population: 20000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, femAdult);