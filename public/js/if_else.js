// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'yellow'; // TODO: change this to your favorite color from the list
var message;

console.log('Random color chosen is ' + randomColor); 
console.log('My favorite color is ' + favorite);

var name = '';
color;
if (color == 'red') {
	message = 'cherries are red'
} else if  (color == 'orange') {
	message = 'oranges are orange'
} else if  (color == 'orange') {
	message = 'peaches are yellow'
} else if  (color == 'orange') {
	message = 'kiwis are green'
} else if  (color == 'orange') {
	message = 'blueberries are blue'
} else {
	message = 'i don\'t know anything about that color';
}
console.log(message);


// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.
var message = (yellow) ? "That\'s my favorite color!" : "That\'s weird.";
console.log(message);

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.