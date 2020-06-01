$(document).ready(function() {

    // Hamburger add and remove open class
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open')
        $('.top-nav').toggleClass('open')
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open')
        $('.top-nav').removeClass('open')
    });

    // Scroll effect
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    // CSS Components animate with AOS animated scroll library
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});