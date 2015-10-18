"use strict";
$(document).ready(function() {
	// $('ul').addClass('invisible');	
$('*').hover(function(e) {

	e.preventDefault();
	$('*').css('color','red');
},
	function(e) {
	$('*').css('color','black');
	 });
});
