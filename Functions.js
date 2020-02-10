let options = {
    width:1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = ["first", 2, 3, 4, 5];

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

//arr.pop(); //удаляет последний элемент массива
//arr.push("6"); //добавить элемент в конец массива
//arr.shift(); //удаляет первый элемент в массиве
//arr.unshift("1"); //добавить элемент в начале массива

/*arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив:" + mass + ')');
});*/

//console.log(arr);

/*let mass = [1,3,4,6,7];

for (let key in mass) {
    console.log(key);
}

for (let key of mass) {
    console.log(key);
}*/

/*let answers = prompt("",""),
    arr = [];

arr = answers.split(','); //добавляет введенные пользователем данные в массив
console.log(arr);*/

/*let arr = ['aawe', 'zzz', 'pp', 'rqa'],
    i = arr.join(',');
console.log(i);*/

/*let arr = ['aawe', 'zzz', 'pp', 'rqa'],
    i = arr.sort();
console.log(i);*/

let array = [1,15,4],
    i = array.sort(comperNum);

function comperNum(a,b) {
    return a-b; //разница между элементами массива - ориентир для метода sort
}    
console.log(i);


