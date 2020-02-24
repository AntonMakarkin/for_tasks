//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log("Red box: touchstart");
        console.log(e.target);
        console.log(e.touches); //все пальцы, прикоснувшиеся к поверхности
        console.log(e.touches[0].target);
        console.log(e.changedTouches);//похожее свойство
        console.log(e.targetTouches); //все пальцы, прикоснувшиеся к блоку
    });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Red box: touchmove" + e.touches[0].pageX);
    });

    box.addEventListener('touchend', function (e) {
        e.preventDefault();
        console.log("Red box: touchend");
    });
});