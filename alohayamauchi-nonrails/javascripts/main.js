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
    centerPadding: '50px',
    slidesToShow: 3,
    // slidesToScroll: 1,
    asNavFor: '.slider-main',
    focusOnSelect: true,
  });

  $('#fullpage').fullpage({
    //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
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
        opacity: 1,
        boxShadow: '10px 20px 30px teal',
        zIndex: 1
      });
      isFixed = false;
    }
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
  $('.img-holder').imageScroll({
    image: null,
    imageAttribute: 'image',
    container: $('.slide-parallax'),
    windowObject: $(window),
    speed:.2,
    coverRatio:.6,
    holderMinHeight: 600,
    holderMaxHeight: null,
    extraHeight: 50,
    mediaWidth: 1900,
    mediaHeight: 1060,
    parallax: true,
    touch: false
  });

  $('#demo-slider2').verticalSlider();

  $('#demo-slider').verticalSlider({
    afterInit: function( currentSection, sectionsNumber  ) { return true; }
  });
});