let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options)); //переводим в JSON

console.log(JSON.parse(JSON.stringify(options))); //переводим обратно