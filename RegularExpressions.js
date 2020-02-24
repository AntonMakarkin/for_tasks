//new RegExp('pattern', 'flags');
// /pattern/

//let ans = prompt('Введите ваше имя');

//let reg = /n/gi;

//console.log(ans.search(reg)); //внутри строки мы ищем регулярное выражение, в данном случае - n
//console.log(reg.test(ans));


//console.log(ans.match(reg));
// i флаг регистра (ищем вне завимисоти от регистра)
// g (ищем все вхождения, а не только перове)
// m ()

// \d //все числа
// \w //все слова
// \s //все пробелы

// \d \D //ищем не число
// \w \W //ищем не слова
// \s \S //ещем не пробел

//let pass = prompt('Введите пароль');

//console.log(pass.replace(/./g, "*")); //замена всех символов на звездочки
//alert('12-34-56'.replace(/-/g, ':')); //замена черточек на двоеточия

//let ans = prompt('Введите число');

//let reg = /\d/g;

//console.log(ans.match(reg));

let str = 'My name is/ R2D2';

console.log(str.match(/\w\d\w\d/i)); //ищем R2D2
console.log(str.match(/\//)); // ищем /