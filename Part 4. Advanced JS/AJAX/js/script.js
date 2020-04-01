let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');

            //request.open(method, url, async, login, pass);
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //метод настройки
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response);
                    }
                    else {
                        reject();
                    }
                }
            };

        });
    }

    catchData()
    .then(response => {
        console.log(response); //response - ответ от сервера
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так!")


    //status
    //statusText
    //responseText / response
    //readyState
});