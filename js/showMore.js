'use strict'
if($(window).width() <= '1350') {
    $('.hidden-text').css('display','none');
}

$('.about-gallery__text-container .show-more').click(function(){
    $('.about-gallery__text-container .hidden-text').css('display','block');
    $('.about-gallery__text-container .show-more').css('display','none');
})

$('.best-brands__text-container .show-more').click(function(){
    $('.best-brands__text-container .hidden-text').css('display','block');
    $('.best-brands__text-container .show-more').css('display','none');
})

$('.service-page-about__text .show-more').click(function(){
    $('.service-page-about__text .hidden-text').css('display','block');
    $('.service-page-about__text .show-more').css('display','none');
})

$('.project-manager__info .show-more').click(function(){
    $('.project-manager__info .hidden-text').css('display','block');
    $('.project-manager__info .show-more').css('display','none');
})

$('.listing-container__brands-container .show-more').click(function(){
    $('.listing-container__brands-container .listing-container__brands-container_hidden').css('display','flex');
    $('.listing-container__brands-container .show-more').css('display','none');
})


