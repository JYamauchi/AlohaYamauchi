$(document).ready(function() {
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
});