    // isotope

    var $grid = $('.services-items-grid').isotope({
        itemSelector:'.service-items',
        layoutMode:'fitRows'
    });

    $('.project_all_btn ul li a').on('click', function(){

        $('.project_all_btn ul li a').removeClass('active');
        $(this).addClass('active');

        var valuey = $(this).attr('data-name');
        $grid.isotope({
            filter: valuey,
       });
       return false
    })

// owl-carousel
     
    $('.exprtise-carousel').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        margin:30,
          autoplay: true,
          autoplayTimeout:3000,
        responsive:{
             0:{
                items:1,
                margin:0
            },
            
            768:{
                items:2
            },
            1000:{
            
                 items:3
            },
            1440:{
                 items:3,
                 margin:30,
            },
        }
    });



    $('.owl-testimonial').owlCarousel({
        nav: false,
        dots: true,
        autoplay: true,
        loop: true,
        margin:30,
        autoplayTimeout:2500,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            1000:{
                items:2,
            }
        }
    });
    

    // logo

$('.owl-client-logo').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})


$(document).on('click','#scroll-top', function () {
    $('html, body').animate({scrollTop:0},1000);
});

