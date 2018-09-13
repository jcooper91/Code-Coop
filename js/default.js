$(document).ready(function() {

	    setTimeout(function(){
	        $('.trans--grow').addClass('grow');
	    }, 275);
		
		var divs = $('h1[id^="scroll-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(400)
              .delay(1000)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();

	// Navbar Animations

	$('#about').click(function() {
		$('html, body').animate({
			scrollTop: $("#about-segment").offset().top
		}, 1000);
	});
	$('#projects').click(function() {
		$('html, body').animate({
			scrollTop: $("#project-section").offset().top
		}, 1000);
	});
	$('#hobbies').click(function() {
		$('html, body').animate({
			scrollTop: $("#hobbies-section").offset().top
		}, 1000);
	});
	$('#contactLink').click(function() {
		$('html, body').animate({
			scrollTop: $(".contact-container").offset().top
		}, 1000);
	});
	
		
}); // End of jQuery





addEventListener("scroll", function(event) {

    var navbar = document.querySelector('nav');
    
    var offset = window.pageYOffset;
    console.log(offset);
	console.log(offset);
    if(offset < 906) {
        navbar.style.backgroundColor = "#489cf3";

    } else if (offset >= 906 && offset < 1883) {
        navbar.style.backgroundColor = "#c0eac1";

    } else if (offset >= 1883 && offset < 2656) {
        navbar.style.backgroundColor = "#f96645";

    } else if (offset >= 2686 && offset < 5286) {
        navbar.style.backgroundColor = "#7bb7f7";
		
    } else if (offset >= 5286) {
		navbar.style.backgroundColor = "#66a276";
	}
});

let para = document.querySelector("footer");
console.log(para.children.length);