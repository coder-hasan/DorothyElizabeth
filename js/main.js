
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    center: true,
    autoplay: true,
    dots: false,
    slideBy: 1,
    nav:true,
    responsive:{
        0:{
            items:1,
            center: false,
            nav:true
        },
        600:{
            items:2,
            nav:true,
            center: false
        },            
        960:{
            items:3,
            nav:true
        },
        1200:{
            items:3,
        }
    }
});
    $( ".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $( ".owl-next").html('<i class="fas fa-arrow-right"></i>');