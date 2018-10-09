import $ from 'jquery';

$(document).ready(function ($) {

	//Modal
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";
		};

	// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		};

	// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
	};

	//Feather Icons initialize
	feather.replace();

	// Smooth Scrolling
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
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
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
						;
					});
				}
			}
		});


	var coll = document.querySelectorAll(".c-nav-menu > li a");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
				if(this.closest("ul.sub")){
					this.closest("ul.sub").style.maxHeight = this.closest("ul.sub").scrollHeight + content.scrollHeight + "px";
				}

			}
		});
	}
});