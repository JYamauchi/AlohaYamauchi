$(document).ready(function () {



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
  var navLi = $('nav li');
  var navHomey = nav.offset().top;
  var isFixed = false; 
  var $w = $(window);
  // nav.style.transition = "opacity 1s";

  $w.scroll(function() {

    var scrollTop = $w.scrollTop();
    var shouldBeFixed = scrollTop > navHomey;
    if (shouldBeFixed && !isFixed) {
      nav.css({
        position: 'fixed',
        top: 0,
        left: nav.offset().left,
        width: nav.width(),
        zIndex: 2
      });
      // nav.fadeTo("slow", 0.5 );
      isFixed = true; 
    }

    else if (!shouldBeFixed && isFixed)
    {
      nav.css({
        position: 'static',
        opacity: 1
      });
      isFixed = false;
    }
  });

  //
  $('#contact-me').localScroll({
    target: '#contact',
    axis: 'xy',
    queue: true
  });

  // init controller
  var controller = new ScrollMagic.Controller({
      globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}
  });

  //init imageScroll method
  $('.img-holder').imageScroll({
    image: null,
    imageAttribute: 'image',
    container: $('body'),
    windowObject: $(window),
    speed:.5,
    coverRatio:.6,
    holderMinHeight: 200,
    holderMaxHeight: null,
    extraHeight: 50,
    mediaWidth: 1600,
    mediaHeight: 900,
    parallax: true,
    touch: false

  });


  //create a scene
  new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#body") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
  

  // $('.jumbotron').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
    
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // });

  //Horizontal Scrolling Effect
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    pauseOnAction: true,
    pauseOnHover: true    
  });
});