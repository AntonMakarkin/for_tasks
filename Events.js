let btn = document.querySelectorAll('button'),
    link = document.querySelector('a');

/*btn[0].onclick = function() {
    alert('Вы нажали первую кнопку');
};

btn[0].onclick = function () {
    alert('Вы опять нажали первую кнопку');
};*/

/*btn[0].addEventListener('click', function() {
    alert('Вы нажали первую кнопку');
    alert('Вы опять нажали первую кнопку');
});*/

/*btn[0].addEventListener('click', function (event) {
    console.log(event);
    let target = event.target;
    target.style.display = 'none';
    //console.log('Произошло событие: ' + event.type + 'на элементе: ' + event.target);
});*/

/*btn[0].addEventListener('click', function () {
    alert('Вы опять нажали первую кнопку');
});

btn[0].addEventListener('mouseneter', function () {
    alert('Вы навели на первую кнопку');
});*/

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + 'на элементе: ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("Вышли");
    });
});