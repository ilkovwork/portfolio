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
  slidesToShow: 1,
  slidesToScroll: 1, 
  centerMode: true,     
  dots: true,
  arrows:false,
  infinite: true, 
  // variableWidth: true,
  initialSlide:2,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        centerMode: false, 
        variableWidth: false,
      }
    },
      {
        breakpoint: 768,
        settings: {
          centerMode: false, 
          variableWidth: false,
        }
      }
  ] 
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    