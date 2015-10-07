"use strict";

function doSomething(param1) {
	console.log(param1);
}

doSomething('Hello World');


function areaofrectangle(length, width) {
	var area = length * width;
	return area;				// once you return it's finished
}

areaofrectangle(10, 5);
console.log(areaofrectangle);


function isEven(input) {
	return (input % 2 === 0) ? true : false;
}

for(var i = 1; i <= 100; i++) {
	if(isEven(i)) {
		console.log(i + ' is even');
	}
}


console.log("Hello from the external JavaScript!");

