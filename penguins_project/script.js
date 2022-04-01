// JaveScript Penguins practice project

// This script will run a function that will generate a random number and that determiness where the yeti hides. That div will get th id of "yeti" and also the clikc event listener.

// Event listener to run game when page loads

window.addEventListener("load", newGame);

// click event listener on the "play again" button to restart the game

document.getElementById("button").addEventListener("click", function(){
	window.location.reload();
});


// definition of the newGame() function

function newGame(){
	// generate a random number between 2 and 10 

	let randNum = Math.floor(Math.random() * 9) + 2;
	console.log(randNum);

	// build an arrey of <div> elements, use the random number to target a different one ech game


	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");

// play the sound effect and add an alertbox when the Yeti is found

document.getElementById("yeti").addEventListener("click", 
	function(){
		window.alert("GAME OVER! You Found the Yeti!");
		doument.getElementById("sound").play();
	
});

}

