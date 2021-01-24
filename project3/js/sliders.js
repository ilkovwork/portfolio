$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  infinite:false,
  initialSlide:1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows:false,
      }
    }

  ]
});

$('.slider-theme').slick({
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 2,               
  dots: true,
  arrows:false,
  infinite: true, 
  variableWidth: true,
  initialSlide:2  
});


$('.posts-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  focusOnSelect: true,
  infinite:false,
  arrows:true,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }

  ]
});

    