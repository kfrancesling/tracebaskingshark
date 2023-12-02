// the variables below delcare the variable and then lik to the id's in our html
const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
var bg;

// these are empty varibales - for later
const paths = [];
let currentPath = [];

// set up, this functions runs everything in the curly brackets once when the page is loaded.
function preload(){
    bg = loadImage("https://divemagazine.com/wp-content/uploads/basking-shark-warm-blooded-title.jpg")
}
function setup() {
  	createCanvas(1200,800); // this creates the canvas we will work upon, the window functions delcare 
}

function draw() {
    background(bg)
	noFill();
	
    // this is checking if the mouse has been pressed, then if so, it prints  on screen 
	if(mouseIsPressed){
		const point = {
			x: mouseX, // coordinates of the mouse
			y: mouseY,
			color: colorInput.value, // this is linked to the colour input value declared in our html- see the first line
			weight: weight.value //  this is linked to the weight input value declared in our html- see the second line
		};
		currentPath.push(point);
	}
	
    // the forEach loop 
	paths.forEach(path => {
		beginShape(); // a p5 method to begin to record vertices for a shape
		path.forEach(point => { // using a point object to draw the shape
			stroke(point.color); // stroke refering to our color 
			strokeWeight(point.weight); // stroke refering to our weight
			vertex(point.x, point.y); // vertex refering to our mouse location
		});
		endShape(); // a p5 method to end the recording of vertices for a shape
	});
}

// 
function mousePressed() {
	currentPath = []; // initialise current path to empty
	paths.push(currentPath); // push the current path 
}

// saved function: 

function keyTyped() {
  if (key == 's') {
    saveCanvas('photo', 'png');
  }
}

// clear function:
    
clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});

