$(document).ready(function() {
	jQuery.fn.exists = function(){return this.length>0;}
		if ($('.visual').exists()){
		$('.visual').cycle({
			fx: 'scrollHorz',
			timeout: 0,
			slides: ".slide",
			pagerActiveClass: "active"
		});
	}
	$(function() {
		if (window.PIE) {
			$('.ie-fix' ).each(function() {
				PIE.attach(this);
			});
		}
	});
	function adjust_aside_height(){
		if ($('.wrapper').height() > $('.wrapper #sidebar').height()) {
			$('.wrapper .sidebar-holder').css('min-height', $('.wrapper').height() - '60');
		}
	};
	if ($('#sidebar').exists()) {
		$(window).resize(function(){
			adjust_aside_height();
		});
		$(window).load(function(){
			adjust_aside_height();
		});
	}
});