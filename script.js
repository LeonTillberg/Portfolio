$(document).ready(function () {
    //When clicking the burger menu it opens the navbar:
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    //When clicking an item in the navbar it closes itself:
    $('.top-nav .nav-link').on('click', function () {
        $('-menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    //When pressing a nav-item page takes user to its location:
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
    //Press button to come to the top of the page:
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    //Animate elements to fade into the site:
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});
