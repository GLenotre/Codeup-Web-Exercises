$(document).ready(function() {
	$('dd').addClass('invisible');	
$('a').click(function(event) {
	event.preventDefault();
	$('dd').toggleClass('invisible');
	});
});

 //add a link that toggles the class invisible on and off for all dd elements
	
    //$(this).toggleClass('invisible');