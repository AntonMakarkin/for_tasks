/*localStorage.setItem("number", 1); //key, value

console.log(localStorage.getItem("number")); //получить ключ

localStorage.removeItem("number"); //удалить ключ

localStorage.clear(); //полностью очистим*/

window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById("change"),
        form = document.getElementsByTagName("form")[0];

    if(localStorage.getItem("isChecked") === "true") { //если ключ-значение существует
        checkbox.checked = true; //устанавливаем чекбокс в checked
    }

    if(localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener('click', function() { //при клике на чекбокс устанваливаем ключ-значение
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    };

    //Сериализация

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);
    
    console.log(JSON.parse(localStorage.getItem("Alex")));
});

