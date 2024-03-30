// === jquery all operation ===
$(function(){
  // ==== counter js ====
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ==== counter js ====
// ==== slick slider js ====
$('.slider_wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  prevArrow:'.slider_arrowLeft',
  nextArrow:'.slider_arrowRight',
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});
// ==== slick slider js ====

})
// === jquery all operation ===