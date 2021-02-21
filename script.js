var _ = require('lodash');

console.log(_);

var array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('answer:', _.without(array, 3));

var database = [
	{
		username: "Li",
		password: "123"
	}
];

var newsfeed = [
	{
		username: "Bob",
		timeline: "So tired"
	},
	{
		username: "Sa",
		timeline: "So cool"
	}
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsfeed);
	}
	else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);
