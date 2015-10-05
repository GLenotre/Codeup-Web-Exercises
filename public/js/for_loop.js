"strict only"
for (var i = 100; i > 0; i = i - 5) {
	console.log('' + i);
}

var number = 99;
while (number >= 1) {
	if (number == 1) {
		console.log (number + ' bottle of beer on the wall take one down and pass it around');
	} else {
		console.log (number + ' bottles of beer on the wall take one down pass it around.');
	}
	number -= 1; 
	}

console.log('No more bottles of beer, Someone go to the store.');
console.log(number);

for (var number = 99; number >= 1; number -= 1) {
	if (number > 1) {
		console.log(number + ' bottles of beer on the wall');
	} else {
		console.log(number + ' bottle of beer on the wall')
	}
}
console.log('No more bottles of beer')
console.log(number);


for (var i = 9; i <= 15; i++) {  

for (var x = 0; x <= 10; x++) { 
	console.log(i * x);
	console.log('inner loop');
} 	
	console.log('outer loop');
}