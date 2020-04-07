$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() { //правильное назначение обработчика
        $('image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() { //ф-ция animate
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});