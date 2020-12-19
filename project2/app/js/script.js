
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  infinite:false
});


$('.slider-large').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  infinite:false,
  asNavFor: '.slider-small'
});

$('.slider-small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  infinite:false,
  asNavFor: '.slider-large',
});