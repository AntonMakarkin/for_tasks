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

    info.addEventListener('click', function(event) {
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
    });

    // Timer

    let deadLine = '2020-03-10';

    function getTimeRemaining(endtime) { //определяем остаток времени
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60), //Округляем до ближайшего меньшего целого, переводим мс в с и вычлиняем остаток(узнав кол-во минут)
            minutes = Math.floor((t/1000/60) % 60), //вычленили минуты
            hours = Math.floor((t/(1000 * 60 * 60))); //вычленили часы

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    //динамически меняем верстку, создавая таймер

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock, 1000);
        
        //обновляем таймер

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) { //если число меньше 10, то подставляем перед ним 0
                if (num <= 9) {
                    return '0' + num;
                }
                else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);
});