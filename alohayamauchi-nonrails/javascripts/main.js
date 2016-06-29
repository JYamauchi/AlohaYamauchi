$(document).ready(function () {
  //Slick Slider Main
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  });
  //Slick Slider Navigation Menu
  $('.slider-nav').slick({
    centerMode: true,
    centerPadding: '0%',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-main',
    focusOnSelect: true,
    variableWidth: true
  });

  $('#demo-slider').verticalSlider({
    afterInit: function( currentSection, sectionsNumber  ) { return true; }
  });

  $('#demo-slider2').verticalSlider({
    afterInit: function( currentSection, sectionsNumber  ) { return true; }
  });

  $('#fullpage').fullpage({
    //Accessibility
    keyboardScrolling: true,
    scrollOverflow: true
  });

  //For Navigation Menu
  var nav = $('header');
  var navLi = $('nav');
  var navHomey = nav.offset().top;
  var isFixed = false; 
  var $w = $(window);
  $w.scroll(function() {
    var scrollTop = $w.scrollTop();
    var shouldBeFixed = scrollTop > navHomey;
    if (shouldBeFixed && !isFixed) {
      nav.css({
        position: 'fixed',
        opacity: 0.5,
        top: 0,
        left: nav.offset().left,
        width: nav.width()
      });
      isFixed = true; 
    }
    //If Nav Menu reaches to the top, this activates.
    else if (!shouldBeFixed && isFixed)
    {
      nav.css({
        position: 'static',
        opacity: 1
      });
      isFixed = false;
    }
  });

  $('.parallax-window').parallax({
    imageSrc: 'http://www.alohayamauchi.com/images/portfolio/Restofy-CP.png',
    speed: 0.2,
    zIndex: 1
  });


  // //
  // $('#contact-me').localScroll({
  //   target: '#contact',
  //   axis: 'xy',
  //   queue: true
  // });

  // // init controller
  // var controller = new ScrollMagic.Controller({
  //     globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}
  // });

  //init imageScroll method
  // $('.img-holder').imageScroll({
  //   image: null,
  //   imageAttribute: 'image',
  //   container: $('body'),
  //   windowObject: $(window),
  //   speed:.2,
  //   coverRatio:.6,
  //   holderMinHeight: 600,
  //   holderMaxHeight: null,
  //   extraHeight: 50,
  //   mediaWidth: 1900,
  //   mediaHeight: 1060,
  //   parallax: true,
  //   touch: false
  // });

});