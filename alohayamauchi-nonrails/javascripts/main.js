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

  // $(".jy-ufo-div")
  //   .velocity("fadeIn", { duration: 3500 });

  // $("#jy-logo-svg", ".jy-logo-path")
  //   .delay(2000)
  //   .velocity({ fillRed: 255, fillGreen: 255, fillBlue: 255, opacity: 1}, {duration: 1000});
  
  // ufoSpinPath
  //   .delay(1000)
  //   .velocity({ scale: 0.9, fillRed: 0, fillGreen: 0, fillBlue: 0, opacity: 0})
  //   .velocity({ scale: 1, fillRed: 255, fillGreen: 255, fillBlue: 255, opacity: 1});

  var ufoSVG = $(".jy-ufo-div")[0];
  var logoSVG = $("#jy-logo-svg")[0];
  var doubleRings = $("#jy-double-rings-svg")[0];
  var outerRing = $("#jy-outer-ring-svg")[0];
  var innerRing = $("#jy-inner-ring-svg")[0];
  var logoPaths = $(".jy-logo-path", ".jy-inner-ring", ".jy-outer-ring", ".jy-double-rings")[0];

  //TweenMax.to(doubleRings, .3, {glowFilter:{color:0xffffff, alpha:1, blurX:30, blurY:30}, paused:true});

  TweenMax.to([logoSVG, doubleRings, ufoSVG, outerRing, innerRing], 0, {
    transformOrigin: "50% 50%"
  });

  TweenMax.to([logoSVG, outerRing, innerRing, doubleRings], 0, {
    left: "50%", top: "50%",
    xPercent: "-50", yPercent: "0"
  });
  createAnimation(logoSVG);

  function createAnimation(element) {
    var isPlaying = false;
    var rotateCD = TweenMax.to(outerRing, 0.3, {
      rotation: 360, 
      ease: Power0.easeNone,
      repeat: -1,
      paused: true
    }).timeScale(0);

    var rotateCD2 = TweenMax.to(innerRing, 0.3, {
      rotation: -360, 
      ease: Power0.easeNone,
      repeat: -1,
      paused: true
    }).timeScale(0);
      
    element.addEventListener("mouseover", toggleOn);
    element.addEventListener("mouseout", toggleOff);
    
    function toggleOn() {      
        isPlaying = true;
        rotateCD.play(); rotateCD2.play();
        TweenMax.to([rotateCD, rotateCD2], 2, { timeScale: 1 });
        // $("#jy-logo-svg", ".jy-logo-path").velocity({ scale: 1, fillRed: 255, fillGreen: 255, fillBlue:255, opacity: 1});
    }

    function toggleOff() {
      isPlaying = false;            
      TweenMax.to([rotateCD, rotateCD2], 2, { 
        timeScale: 0, 
        onComplete: rotateCD.pause, 
        callbackScope: rotateCD 
      });
      //ufoSpinPath.velocity({ scale: 0.95, fillRed: 0, fillGreen: 0, fillBlue: 0, opacity: 0});
    }
  }
  
  var button = document.createElement("Button");
    button.innerHTML = "Title";
    button.style = "margin-top:0%;right:0%;position:absolute;"
    document.body.appendChild(button);

  var polyfilter_scriptpath = 'http://www.alohayamauchi.com/javascripts/';

  $('.jy-logo-div1').css('polyfilter','drop-shadow(0px 0px 10px #fff);');

});