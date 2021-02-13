var database =[
	{
		username: "Li",
		password: "123"
	}
];

var newsfeed = [
	{
		username:"Bob",
		timeline:"So tired"
	},
	{
		username:"Sa",
		timeline:"So cool"
	}
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(user,pass){
	if (user === database[0].username &&
		pass === database[0].password)
	{
		console.log(newsfeed);
	}
	else{
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);
