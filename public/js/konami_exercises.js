
$(document).ready(function() {			
	"use strict";
	var contra = "38,38,40,40,37,39,37,39,66,65";
	var answer = []

	 $(document).keyup(function(event) {
	 	answer.push(event.keyCode);
	 	if(answer.toString().indexOf(contra) >= 0){
		$("*").css('background-color','chartreuse').css('font-family', 'Monospace').css('font-size', '40px');
		$("p").html("You win!!!");
		console.log(answer);
	 	answer = []
	 	}

	});
});
