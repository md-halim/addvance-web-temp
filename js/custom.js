$(function () {

      
    //modal
	var videomodal = $(".video_modal iframe");
	$("#video_part").on('hidden.bs.modal', function (e) {
		videomodal.attr("src", videomodal.attr("src"));
	});


    $('.team_member').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.team_mess',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.team_mess').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team_member',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    //slick 

    $('.slick_slider').slick({
        autoplay: true,
        nextArrow: ('.fa.fa-long-arrow-right.prevbtn'),
        prevArrow: ('.fa.fa-long-arrow-left.nxtbtn'),
        fade: true,
        dots: true,
    });


    // counter
    $('.count').counterUp({
        delay: 1,
        time: 500,
    });


    //filtar
    $('.filtr-container').filterizr();

    //Simple filter controls
    $('.filter_menu li').click(function () {
        $('.filter_menu li').removeClass('active');
        $(this).addClass('active');
    });


    //animation scroll js
    $('#omonu ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 800);
                return false;
            }
        }
    });


    //back to top button
    $(window).on('scroll', function () {
        var winscroll = $(window).scrollTop();
        if (winscroll > 120) {
            $(".back_top").fadeIn(1000);
        } else {
            $(".back_top").fadeOut(1000);
        }

    });

    $(".back_top").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });


    // venobox
    $(document).ready(function () {
        $('.venobox').venobox({
            frameheight: '400px',
            framewidth: '500px',
            border: '6px',
            bordercolor: '#',
            numeration: 'false',
            nextArrow: '.vbox-prev',
        });

    });




    //scrollpy
    $('body').scrollspy({
        target: '#navbar-example'
    });




    //progress
    var lang = {
        "html": "100%",
        "css": "90%",
        "javascript": "70%",
        "php": "55%",
        "angular": "65%"
    };

    var multiply = 4;

    $.each(lang, function (language, pourcent) {

        var delay = 700;

        setTimeout(function () {
            $('#' + language + '-pourcent').html(pourcent);
        }, delay * multiply);

        multiply++;

    });

    //feedback slik

    $('.feedback_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
        },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
        }
      ]
    });



    //blog slick

    $('.blog_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
        }
      ]
    });



    //    market slick

    $('.market_slick').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
        },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2
                }
        }
      ]
    });






});