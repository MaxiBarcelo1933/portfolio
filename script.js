$(document).ready(function () {

    $('nav a').click(function (e) {
        e.preventDefault();

        const target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

});

$('#contact-form').submit(function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const email = $('#email').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre === '' || email === '' || mensaje === '') {
        $('#form-mensaje').text('Por favor completá todos los campos.');
        return;
    }

    $('#form-mensaje').text('Mensaje enviado correctamente.');
    $('#contact-form')[0].reset();
});

$(window).on('scroll', function () {

    $('.section-hidden').each(function () {

        const sectionTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > sectionTop + 100) {
            $(this).addClass('section-visible');
        }

    });

});

 const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });