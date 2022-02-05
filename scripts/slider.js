const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
    
});

$('.left-btn').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.right-btn').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})