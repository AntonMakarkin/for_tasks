//setTimeout(func, delay);

//let timerId = setTimeout(sayHello, 3000);
//clearTimeout(timerId); используется чтобы отменить setTimeout

//let timerId = setInterval(sayHello, 3000);
//clearTimeout(timerId);

/*function sayHello() {
    console.log('Hello World!');
}*/

//рекурсивный вызов SetTimeout
/*let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000); //эта пауза в две секунды между выполнением тела функции
});*/

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0; // изначальная позиция

    let id = setInterval(frame, 10); //каждые 10мс мы запускаем функцию frame

    function frame() {
        if (pos == 300) { //если и top и left будут 300, то
            clearInterval(id); //останавливаем анимацию
        }
        else { //иначе
            pos++; //увеличиваем pos на 1 и увеличиваем top и left на 1
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

//Делигирование (работает и без event.target)

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    /*if (event.target && event.target.tagName == 'BUTTON') {
        console.log("Hello");
    }*/
    /*if (event.target && event.target.classList.contains('first')) {
        console.log("Hello");
    }*/
    if (event.target.matches('button.first')) {
        console.log("Hello");
    }
});    