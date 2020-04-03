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

    let deadLine = '2020-03-15';

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
            seconds = timer.querySelector('.seconds'),
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

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description = document.querySelectorAll('.description-btn');

    function ModalWindowCall(btnshow, overlay, btnclose) {
        btnshow.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        btnclose.addEventListener('click', function () {
            overlay.style.display = 'none';
            btnshow.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    ModalWindowCall(more, overlay, close); //For button under timer
    ModalWindowCall(description[0], overlay, close); // For buttons in description
    ModalWindowCall(description[1], overlay, close); // For buttons in description
    ModalWindowCall(description[2], overlay, close); // For buttons in description
    ModalWindowCall(description[3], overlay, close); // For buttons in description

    //Form

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так. Попробуйте снова'
    };

    let form = document.querySelector('.main-form'), //форма в поп-ап окне
        input = form.getElementsByTagName('input'),
        mainForm = document.querySelector('#form'),
        mainFormInput = mainForm.getElementsByTagName('input'), //форма в футере
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        function CatchSend() {

            return new Promise(function (resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(form),
                    obj = {};

                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                console.log(obj);

                let json = JSON.stringify(obj);

                request.send(json);

                request.onload = function () {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                };
            });
        }

        CatchSend()
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)

        for (let i = 0; i < input.length; i++) //очищаем форму
        {
            input[i].value = '';
        }

    });

    mainForm.addEventListener('submit', function (event) {
        event.preventDefault();
        mainForm.appendChild(statusMessage);

        function CatchSend() {

            return new Promise(function (resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(form),
                    obj = {};

                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                console.log(obj);

                let json = JSON.stringify(obj);

                request.send(json);

                request.onload = function () {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                };
            });
        }

        CatchSend()
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)

        for (let i = 0; i < input.length; i++) //очищаем форму
        {
            input[i].value = '';
        }

    });

    mainForm.addEventListener('submit', function(event){
        event.preventDefault();
        mainForm.appendChild(statusMessage);

        function CatchSend() {

            return new Promise(function (resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(form),
                    obj = {};

                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                console.log(obj);

                let json = JSON.stringify(obj);

                request.send(json);

                request.onload = function () {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                };
            });
        }

        CatchSend()
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)

        for (let i = 0; i < input.length; i++) //очищаем форму
        {
            input[i].value = '';
        }
    });

    //Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);    

    function showSlides(n) {

        if (n > slides.length) { //если мы промотали вправо до конца
            slideIndex = 1; //возвращаемся к первому
        }
        if (n < 1) { //если мы промотали до влево до конца
            slideIndex = slides.length; //возвращаемся к последнему
        }

        slides.forEach((item) => item.style.display = 'none');  //скрываем слайды
        dots.forEach((item) => item.classList.remove('dot-active'));  //убираем подсвеченность точек переключения

        slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд
        dots[slideIndex - 1].classList.add('dot-active'); //подсвечиваем соот точку

    }
    
    function plusSlides(n) { //уменьшаем или увеличиваем номер слайда в зависимости по какой кнопке был клик
        showSlides(slideIndex += n); //показываем соот слайд
    }

    function currentSlide(n) { //передаем номер кликнутой точки
        showSlides(slideIndex = n); //показываем соот слайд
    }

    prev.addEventListener('click', function() {
        plusSlides(-1); //перемещаемся на слайд назад
    });

    next.addEventListener('click', function() {
        plusSlides(1); //перемещаемся на слайд вперед
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) { //данная конструкция реализована,
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) { //чтобы получить корректный порядковый номер
                currentSlide(i); //и передать его ф-ии слайдера
            }
        }
    });

});

// Второе задание

 /*<input id="age" value="30">
 
 let age = document.getElementById('age');

 function showUser(surname, name) {
          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ["Горький","Максим"]);*/