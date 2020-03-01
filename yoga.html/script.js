window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'), //получаем табы
        info = document.querySelector('.info-header'), //родитель таб-меню
        tabContent = document.querySelectorAll('.info-tabcontent'); //блок контента в соот. с пунктом
    
    function hideTabContent(a) { //скрываем все блоки, кроме первого
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); //начинаем со второго элемента

    function showTabContent(b) { //показываем блок в соответсвии с табом
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { //вызываем функции, скрываем ненужны и показываем нужные блоки
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
});