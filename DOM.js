let box = document.getElementById(''), //берем документ, получаем элемент по его id
    button = document.getElementsByTagName(''); //береме документ, получаемые коллекуию элементов по тегу (псевдомассив)
    circle = document.getElementsByClassName(''), //береме документ, получаемые коллекуию элементов по классу (псевдомассив)
    heart = document.querySelectorAll('.'), //береме документ, получаемые коллекуию элементов по селектору (псевдомассив)
    onHeart = document.querySelector(''), //берем документ, получаем элемент по его селектору
    wrapper = document.querySelector('wrapper.');
box.style.backgroundColor = 'blue';
button[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/*for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}*/

/*heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});*/

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.appendChild(div);
//wrapper.appendChild(div);

//div.innerHTML = '<h1>Hello</h1>';
div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);

document.body.replaceChild(button[1], circle[1]);