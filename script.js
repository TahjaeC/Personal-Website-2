$(document).ready(function () {
    /****Sticky Navigation******/

    $('.js-expertise').waypoint(function (direction) {
        if (direction == 'down') {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
        offset: '80px;'
    });
});

// Mobile Navigation
$('.mobile-nav').click(function () {
    var nav = $('.nav');
    var icon = $('.lni lni-menu');

    nav.slideToggle(200);

    if (icon.hasClass('lni lni-menu')) {

        icon.addClass('lni lni-close');
        icon.removeClass('lni lni-menu');

    } else {
        icon.addClass('lni lni-menu');
        icon.removeClass('lni lni-close');
    }
});