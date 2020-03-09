function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7](); //результат везде 10 - тк var i одна на весь цикл,
//по этому внутренняя i увеличилась вместе с циклом

//let

function makeArray2() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();