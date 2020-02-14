let Menu = document.getElementsByClassName('menu')[0],
    MenuItem = document.getElementsByClassName('menu-item'),
    NewMenuItem = document.createElement('li'),
    Title = document.getElementById('title'),
    Prompt = document.getElementById('prompt'),
    ADS = document.getElementsByClassName('adv')[0];

//исправляем меню
Menu.insertBefore(MenuItem[2], MenuItem[1]); //Меняем 2 элемента списка местами
Menu.appendChild(NewMenuItem); //добаляем 5 элемент в меню
NewMenuItem.textContent = 'Пятый пункт'; //добавляем текст в 5 элемент списка
NewMenuItem.classList.add('menu-item'); //добаляем к элемнту класс для стилизации

//меняем фон body
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

//меняем заголовок
Title.textContent = 'Мы продаем только подлинную технику Apple';

//удадяем рекламу
ADS.remove();

//записываем ответ от пользователя в блок
let AnswerFromUser = prompt('Ваше отношение к технике Apple');
Prompt.innerText = AnswerFromUser;





