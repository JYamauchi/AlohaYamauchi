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
  
  var button = document.createElement("Button");
    button.innerHTML = "Title";
    button.style = "margin-top:0%;right:0%;position:absolute;"
    document.body.appendChild(button);

  var polyfilter_scriptpath = 'http://www.alohayamauchi.com/javascripts/';
  // var polyfilter_skip_stylesheets = true;  
  $('.jy-logo-div1').css('polyfilter','drop-shadow(0px 0px 10px #fff);');

});