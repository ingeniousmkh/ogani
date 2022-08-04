

// js functions for controlling item quantity
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
      
function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}





$(document).ready(function () {

    $("#menu .menu-bar li").click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
          $("#menu .menu-bar li").removeClass("active");
        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
          $("#menu .menu-bar li").removeClass("active");
          $(this).addClass("active");
        }
    });

    
    // side menu and btn relation
    $('.navbar-toggler').click(function(){
        $('#side-menu').toggleClass('show');
        $('.menu-overlay').toggleClass('active');
    });

    $('.side-menu-close-btn').click(function(){
        $('#side-menu').removeClass('show');
        $('.menu-overlay').removeClass('active');
    });


    // fixed menu
    $(window).scroll(function(){
        var Scrolling = $(this).scrollTop();
        // console.log(Scrolling);
        if(Scrolling > 185){
            $("#menu").addClass("fixed-menu");
        }
        else{
            $("#menu").removeClass("fixed-menu");
        }
    });

    // banner slider
    $('.banner-slider').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
    
        ]
    });

    // slidder btn setup for banner slider
    $('.slider-prev').click(function(){
        $('.banner-slider').slick('slickPrev');
    });
      
    $('.slider-next').click(function(){
        $('.banner-slider').slick('slickNext');
    });

    // featured products
    var portfolioIsotope = $('.freatured-product-content').isotope({
        itemSelector: '.f-p',
        layoutMode: 'fitRows'
    });

    $('.featured-product-nav-bar li').on('click', function() {
        $(".featured-product-nav-bar li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
          });
    });


    // latest products slider
    $('.l-p-slider').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
    });

    // slidder btn setup for latest products slider
    $('.l-p-slider-1-prev').click(function(){
        $('.l-p-slider-1').slick('slickPrev'); 
    });
      
    $('.l-p-slider-1-next').click(function(){
        $('.l-p-slider-1').slick('slickNext');
    });

    $('.l-p-slider-2-prev').click(function(){
        $('.l-p-slider-2').slick('slickPrev');
    });
      
    $('.l-p-slider-2-next').click(function(){
        $('.l-p-slider-2').slick('slickNext');
    });

    $('.l-p-slider-3-prev').click(function(){
        $('.l-p-slider-3').slick('slickPrev');
    });
      
    $('.l-p-slider-3-next').click(function(){
        $('.l-p-slider-3').slick('slickNext');
    });

    // latest products slider
    $('.l-p-slider-1').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
    });

    $('.l-p-slider-2').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
    });

    $('.l-p-slider-3').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
    });

    // products pricing slider
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            orientation: "horizontal",
            min: 10,
            max: 1000,
            values: [10, 1000],
            step: 1,
            
            slide: 
                function( event, ui ) {
                    $( "#pricerange" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
                
            });
        $( "#pricerange" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });

    // sale off sider
    $('.sale-off-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
    
        ]
    });

    $('.f-p-slider-prev').click(function(){
        $('.sale-off-slider').slick('slickPrev');
    });
      
    $('.f-p-slider-next').click(function(){
        $('.sale-off-slider').slick('slickNext');
    });

    // nice select for choosing type
    $('.select').niceSelect();


    // changing image of product items
     $('.btn-1').click(function(){
        $('#screen-img').attr('src', 'images/tomato-screen.jpg');
    })

    $('.btn-2').click(function(){
        $('#screen-img').attr('src', 'images/crab-screen.jpg');
    })

    $('.btn-3').click(function(){
        $('#screen-img').attr('src', 'images/products-banner.jpg');
    })

    $('.btn-4').click(function(){
        $('#screen-img').attr('src', 'images/fruit-bag-screen.jpg');
    })

    // shope details page slider
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:20,
        autowidth: false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav: false,
    });


    // payment method
    $(".pay-types li").click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
          $(".pay-types li").removeClass("active");
        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
          $(".pay-types li").removeClass("active");
          $(this).addClass("active");
        }
    });

    // recent news slider
    $('.recent-news-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        arrows: false
    });


    // bottom to top btn
    $(window).scroll(function(){
        var Scrolling = $(this).scrollTop();
        console.log(Scrolling);
        if(Scrolling > 185){
            $("#bottom-to-top").addClass("show-btn");
        }
        else{
            $("#bottom-to-top").removeClass("show-btn");
        }
    });

    $("#bottom-to-top").click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });
});