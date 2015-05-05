(function($) {
	$(document).ready(function() {

		// Remove "no-js" CSS fallback class
		$('body').removeClass('no-js');
	 	
	 	// Navigation menu toggle
	 	$('#menu-toggle').click(function(){
	 		var plusClass = 'fa-plus';
	 		var minusClass = 'fa-minus';
			var menuIcon = $(this).find('i');
			if ( menuIcon.hasClass(plusClass) )
				menuIcon.removeClass(plusClass).addClass('fa-minus');
			else
				menuIcon.removeClass('fa-minus').addClass(plusClass);
			$('.menu-wrap').slideToggle();
			return false;
		});

	 	$(window).bind('resize orientationchange', function() {
	 		if ( !$('.site-navigation').hasClass('animated-navigation') ) {
	 			if ( $('#menu-toggle').is(':hidden') ) {
					$('.site-navigation .menu-wrap').show();
				} else {
					$('#menu-toggle').find('i').removeClass('icon-minus').addClass('icon-plus');
					$('.site-navigation .menu-wrap').hide();
				}
	 		}	 		
	 	});

		// Placeholder	
		$("[placeholder]").focus(function() {
			var el = $(this);
			if (el.val() == el.attr("placeholder")) {
				el.val("");
			}
		}).blur(function() {
			var el = $(this);
			if (el.val() == "" || el.val() == el.attr("placeholder")) {
				el.val(el.attr("placeholder"));
			}
		}).blur();

	});

})(jQuery);