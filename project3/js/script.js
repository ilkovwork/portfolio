
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  infinite:false
});

$('.slider-theme').slick({
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,               
  dots: true,
  arrows:false,
  infinite: true, 
  variableWidth: true,  
});