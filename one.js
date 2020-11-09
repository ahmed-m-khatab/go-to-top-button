$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#two').position().top) {
        $('.go-up').fadeIn(500);
    }
    if ($(this).scrollTop() < $('#two').position().top) {
        $('.go-up').fadeOut(500);
    }
});