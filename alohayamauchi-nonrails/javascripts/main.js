$(document).ready(function () {

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


  // create a scene
  // new ScrollMagic.Scene({
  //       duration: 100,    // the scene should last for a scroll distance of 100px
  //       offset: 50        // start this scene after scrolling for 50px
  //   })
  //   .setPin("#body") // pins the element for the the scene's duration
  //   .addTo(controller); // assign the scene to the controller
  
  // $('.jumbotron').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
    
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // });

  // new ScrollMagic.Scene({triggerElement: "#parallax1"})
  //         .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
  //         .addIndicators()
  //         .addTo(controller);

  // new ScrollMagic.Scene({triggerElement: "#parallax2"})
  //         .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
  //         .addIndicators()
  //         .addTo(controller);

  // new ScrollMagic.Scene({triggerElement: "#parallax3"})
  //         .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
  //         .addIndicators()
  //         .addTo(controller);


  
});