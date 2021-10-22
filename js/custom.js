jQuery(document).ready(function () {

    // Animation

    new WOW().init();

    // Smoth Scroll Animation

    $(".smoth-scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".mob_menu a").click(function () {
        $(this).addClass("open");
        $(".UserMenu").addClass("active");
        $(".menu_overlay").addClass("active");
        $(".header").addClass("active");
        $("body").addClass("hide_scrll");
    });

    $(".menu_overlay").click(function () {
        $(".mob_menu a").removeClass("open");
        $(".UserMenu").removeClass("active");
        $(".menu_overlay").removeClass("active");
        $(".header").removeClass("active");
        $("body").removeClass("hide_scrll");
    });

    $(".sidebar_cntmob a").click(function () {
        $(".sidebar_overlay").toggleClass("active");
        $(".sidebar_contacts").addClass("active");
        $("body").addClass("hide_scrll");
    });

    $(".sidebar_overlay").click(function () {
        $(".sidebar_contacts").removeClass("active");
        $(this).removeClass("active");
        $("body").removeClass("hide_scrll");
    });

    $(".headerUserboxMain.dropdown-toggle").on("mouseenter", function () {
        if (!$(this).parent().hasClass("show")) {
            $(this).click();
        }
    });

    /*   Post Slider   */

    jQuery('.postbox_slider, .heroslider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.dashNavSlide').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.coupnSlider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.testiSlider').slick({
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    setTimeout(function () {
        jQuery('.poll_slider').slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }, 100);

    jQuery(document).on('hidden.bs.modal', function (event) {
        if (jQuery('.modal:visible').length) {
            jQuery('body').addClass('modal-open');
        }
    });

//    if ($(window).width() > 767) {
//        $('#app_slide').carousel({
//            pause: false,
//            interval: 1500
//        });
//        new WOW().init();
//    };

    $("#app_slide .carousel-indicators li, #app_slide2 .carousel-indicators li").click(function () {
        var goto = Number($(this).attr('data-slide-to'));
        $("#app_slide").carousel(goto);
    });

});
