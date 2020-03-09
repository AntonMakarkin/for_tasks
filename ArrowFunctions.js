let fun = () => {
    console.log(this);
};

fun(); 

let obj = {
    number: 5,
    sayNumber: function() {
        let sayName = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber(); //стрелочная ф-ция не имеет контекста, она берет его у родителя

let btn = document.querySelector('button');

btn,addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});