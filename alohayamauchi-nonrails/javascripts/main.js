$(document).ready(function () {

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
  
});