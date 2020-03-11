let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    //internet = [video, blogs, 'vk', 'facebook'];
    internet = [...video, ...blogs, 'vk', 'facebook']; //оператор 'разворота' массивов


console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);