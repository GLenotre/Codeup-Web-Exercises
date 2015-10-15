
$(document).ready(function() {			// DO ONE BIG (document).ready(function()) {} // instead of IEFE, protects from global scope

	$( "h1" ).click(function(e) {
		$(this).css('background-color','salmon');
	});
	$( "p" ).dblclick(function(e){
		$(this).css('font-size','18px');
	});
	$( "li" ).hover(function(e){
		$(this).css('color','red');
	});
	// Set all li text color to red when the mouse is hovering, reset to white when it is not.
});
