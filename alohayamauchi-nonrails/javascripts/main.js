$(document).ready(function () {

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
  var scrollOptions = {click: false,  wheelStep: 20};
  if (Modernizr.touch) {
    scrollOptions.click = true;
  }

  //FullPage JS produces a slide section for each full screen part
  $('#fullpage').fullpage({
    //Accessibility
    keyboardScrolling: true,
    scrollOverflow: true,
    scrollOverflowOptions: scrollOptions,
    continuousVertical: true
  });

  $(".jy-ufo-div")
    .velocity("fadeIn", { duration: 3500 });

  $(".jy-ufo-path")
    .delay(500)
    .velocity({ strokeRed: 0, strokeGreen: 0, strokeBlue: 0, opacity: 1, strokeWidth: 2 })
    // .velocity({ fillRed: 0, fillGreen: 255, fillBlue: 0, opacity: 1})
    .delay(1000)
    .velocity({ strokeRed: 255, strokeGreen: 255, strokeBlue: 255, opacity: 1, strokeWidth: 10 })
    .velocity({ fillRed: 255, fillGreen: 255, fillBlue: 255, opacity: 1});

    $(".jy-ufo-spin-path")
    .delay(1000)
    .velocity({ scale: 0.9, fillRed: 0, fillGreen: 0, fillBlue: 0, opacity: 0})
    .delay(1000)
    .velocity({ scale: 1, fillRed: 255, fillGreen: 255, fillBlue: 255, opacity: 1});

  var logoSVG = $("#jy-logo-svg")[0];
  var ufoSVG = $("#jy-ufo-svg")[0];

  createAnimation(logoSVG);

  function createAnimation(element) {
    var isPlaying = false;
    var ufoSpin = $(".jy-ufo-spin-path")[0];
    var ufoSpinScale = TweenMax.to(ufoSpin, 1, {
      transformOrigin: "50% 50%",
      scale: 0.98,
      paused: true
    }).timeScale(0);

    var rotateCD = TweenMax.to(ufoSVG, 0.3, {
      rotation: 360, 
      ease: Power0.easeNone,
      repeat: -1,
      paused: true
    })
    .timeScale(0);
      
    element.addEventListener("mouseover", toggleOn);
    element.addEventListener("mouseout", toggleOff)
    
    function toggleOn() {      
        isPlaying = true;
        rotateCD.play();
        TweenMax.to(rotateCD, 2, { timeScale: 1 });
        ufoSpinScale.play();
        TweenMax.to(ufoSpinScale, 2, { timeScale: 1});
    }

    function toggleOff() {
      isPlaying = false;            
      TweenMax.to(rotateCD, 2, { 
        timeScale: 0, 
        onComplete: rotateCD.pause, 
        callbackScope: rotateCD 
      });
      TweenMax.to(ufoSpinScale, 2, {
        scale: 0.9
        //timeScale: 1,
        // onComplete: ufoSpinScale.pause,
        //callbackScope: ufoSpinScale
      })
    }
  }
  
  var button = document.createElement("Button");
    button.innerHTML = "Title";
    button.style = "margin-top:0%;right:0%;position:absolute;"
    document.body.appendChild(button);

  var polyfilter_scriptpath = 'http://www.alohayamauchi.com/javascripts/';
  // var polyfilter_skip_stylesheets = true;  
  $('.jy-logo-div1').css('polyfilter','drop-shadow(0px 0px 10px #fff);');

});