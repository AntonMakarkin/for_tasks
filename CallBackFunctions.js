function learnJS(lang, callback) {
    console.log("Я учу " +lang);
    callback();
}

function done() {
    console.log("Я прошел 3й урок");
}

/*learnJS("JavaScript", function() {
    console.log("Я прошел 3й урок");
});*/

learnJS("JavaScript", done);


