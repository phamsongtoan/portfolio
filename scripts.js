$(document).ready(function () {
    AOS.init({
        once: true
    });




    // Init Slick
    $('.my-slider').slick({       
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false       
    });
  
    $(".mobile-menu").click(function () { 
        const bgc = $('.bgc');
        const isVisible = !bgc.hasClass("hidden");
        if (isVisible) {
            bgc.addClass("hidden");
        }else{
            bgc.removeClass("hidden");
        }
    });

    //NAVIGATION-NAV
    $(window).scroll(function (e) {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 75)
        {
            $('nav').addClass("sticky")
        } else {
            $('nav').removeClass("sticky")
        }
    });

    


});




