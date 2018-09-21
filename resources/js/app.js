import $ from 'jquery';
import 'bootstrap';

$(document).ready(function($) {

	//Modal
	$('#myModal').on('shown.bs.modal', function() {
		$('#myInput').focus()
	});

	//Dropdown on Click
	function dropDown() {
		var x = document.getElementById("sub-menu");
		if (x.className.indexOf("show") == -1) {
			x.className += " show";
		} else {
			x.className = x.className.replace(" show", "");
		}
	}

	//Simple Sidebar Toggle
	$("#menu-toggle").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

	//Feather Icons initialize
	feather.replace();

	// Smooth Scrolling
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});
});