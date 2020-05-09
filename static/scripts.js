
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if (element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if ($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
	}
}


jQuery(document).ready(function () {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
    /*
        Background slideshow
    */
	$('.top-content').backstretch("/static/back.jpg", {
		overlay: {
			init: true,
			background: "#444444",
			opacity: 0.4
		}
	});

	$('#top-navbar-1').on('shown.bs.collapse', function () {
		$('.top-content').backstretch("resize");
	});
	$('#top-navbar-1').on('hidden.bs.collapse', function () {
		$('.top-content').backstretch("resize");
	});
	
	new WOW().init();

});

