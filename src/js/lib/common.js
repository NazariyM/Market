/* Common JS */
$(document).ready(function() {

    wow = new WOW({
      mobile: false
    })
    wow.init();

    //for IE9
    svg4everybody();

    // detect phone/tablet
    var md = new MobileDetect(window.navigator.userAgent);
    console.log(md.phone());
    console.log(md.tablet());

    // check orientation device
    function isPortrait() {
        return window.innerHeight > window.innerWidth;
    };

    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        if (isPortrait()) {
            // code here
        }
    }, false);

    // Clear placeholder
    (function() {
        var el = $('input, textarea');
        el.focus(function() {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }());

    // new WOW().init();

});

// products-slider

$(document).ready(function() {
    $('.products-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

// counter only in main page

$(function() {
    if ($('body').is('.main-page')) {
        var show = true;
        var countbox = ".protected";
        $(window).on("scroll load resize", function() {

            if (!show) return false;

            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;

            var w_height = $(window).height();
            var d_height = $(document).height();

            var e_height = $(countbox).outerHeight();

            if (w_top + 640 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".spincrement").spincrement({
                    duration: 1200
                });

                show = false;
            }
        });
    };
});

// map

YMaps.jQuery(function() {

    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.59338756, 55.82006721));

    map.addControl(new YMaps.TypeControl());
    map.setCenter(new YMaps.GeoPoint(37.59338756, 55.82006721), 16);
    map.addOverlay(placemark);
    map.enableScrollZoom();

});

// navigation

$(document).ready(function() {
    var hamburger = $('.hamburger'),
        nav = $('.menu'),
        body = $('body');

    hamburger.click(function() {
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('is-active');
        $('body').toggleClass('is-active');

        $(window).on('resize', function() {
            if (nav.hasClass('is-active')) {
                nav.removeClass('is-active');
            }
            if (hamburger.hasClass('is-active')) {
                hamburger.removeClass('is-active');
            }
            if (body.hasClass('is-active')) {
                body.removeClass('is-active');
            }
        });
    });

    // scroll to top

    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // tabs

    var tabToggle = $('.tabs-item__toggle');

    tabToggle.click(function() {
        $(this).toggleClass('is-active');
        $(this).parent().parent().toggleClass('is-active');
    });
});
