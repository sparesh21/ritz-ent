$(document).ready(function() {
    AOS.init();
    var swiper = new Swiper('.slider-main .swiper-container', {
        effect: 'fade',
        speed: 2000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
$(window).on('load', function() {
    $('.loader').fadeOut();
})