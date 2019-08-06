// record tracker var
var numSquares = 6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

for(var i = 0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click" , function(){
	modeButton[0].classList.remove("selected");
	modeButton[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent ==="Easy" ? numSquares =3: numSquares =6;
	reset();
	});
}

/*
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent =	pickedColor;
for(var i = 0; i<squares.length; i++){
	if(colors[i]){
		squares[i].style.backgroundColor= colors[i];
	}else{
		squares[i].style.display = "none";
	}
}

});

hardBtn.addEventListener("click", function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent =	pickedColor;
for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor= colors[i];
		squares[i].style.display = "block";
	}
});

*/
function reset(){
	// genarate all new color
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// remove Message to play again button and change button to new color
	displayMessage.textContent = "";
	resetButton.textContent = "New Colors";
	// change color of squares
for (var i =0; i<squares.length;i++){
	if(colors[i]){
	squares[i].style.display = "block";
	squares[i].style.backgroundColor = colors[i];

	} else{
		squares[i].style.display ="none";
	}
}
	h1.style.backgroundColor = "steelblue";
};


resetButton.addEventListener("click" , function (){
/*	// genarate all new color
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// remove Message to play again button and change button to new color
	displayMessage.textContent = "";
	this.textContent = "New Colors";
	// change color of squares
for (var i =0; i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
}
	h1.style.backgroundColor = "steelblue";
*/
reset();

	});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length;i++){
// add initail colors to the squares
    squares[i].style.backgroundColor =colors[i]; 
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			changeColors(clickedColor);
			displayMessage.textContent = "Correct!";
			resetButton.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "black";
			displayMessage.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
