import WeCards from './modules/weCards';
import Scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', function() {
    
    $('.slider__wrapper').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next-arrow.png"></button>',
    });
    WeCards('.weDo__descr-arrow img', '.weDo__descr-item', 'weDo__descr-item-active');
    Scrolling();
});




