$ (function(){
  
  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close');
  })
  $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.header__btn-menu').on('click', function(){
    $('.menu').toggleClass('menu--open');
  });

  $('.top__slider').slick({
    dots:true,
    arrows:false,
    fade:true,
  });

  if($(window).width() < 651){
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
  }

  $('.contact-slider').slick({
    slidesToShow:10,
    slidesToScroll:10,
    dots:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToScroll:8,
          slidesToShow:8,
        }
      },
      {
        breakpoint:1511,
        settings: {
          slidesToScroll:6,
          slidesToShow:6,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToScroll:4,
          slidesToShow:4,
        }
      },
         {
        breakpoint: 841,
        settings: {
          slidesToScroll:3,
          slidesToShow:3,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToScroll:2,
          slidesToShow:2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToScroll:1,
          slidesToShow:1,
        }
      },
    ]
  });

  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="img/arrow-slide-left.svg" ></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="img/arrow-slide-right.svg" ></button>',
  });

  var mixer = mixitup('.gallery__inner',{
    load:{
      filter:'.living'
    }
  });
});