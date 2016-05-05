(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');







(function(){

	$wrapper = $('#wrapper');
	$drawerRight = $('#drawer-right');

	///////////////////////////////
	// Set Home Slideshow Height
	///////////////////////////////



	///////////////////////////////
	// Center Home Slideshow Text
	///////////////////////////////



	///////////////////////////////
	// SlideNav
	///////////////////////////////

	function setSlideNav(){
		jQuery(".toggleDrawer").click(function(e){
			//alert($wrapper.css('marginRight'));
			e.preventDefault();

			if($wrapper.css('marginLeft')=='0px'){
				$drawerRight.animate({marginRight : 0},200);
				$wrapper.animate({marginLeft : -300},200);
			}
			else{
				$drawerRight.animate({marginRight : -300},200);
				$wrapper.animate({marginLeft : 0},200);
			}
			
		})
	}






	///////////////////////////////
	// Initialize
	///////////////////////////////

	jQuery.noConflict();
	setHomeBannerHeight();
	centerHomeBannerText();
	setSlideNav();
	setHeaderBackground();

	//Resize events
	jQuery(window).smartresize(function(){
		setHomeBannerHeight();
		centerHomeBannerText();
		setHeaderBackground();
	});



	})

	jQuery(window).scroll( function() {
	   setHeaderBackground();
	});

})();