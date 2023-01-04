// Debugging

console.log(randomColor());
console.log(generateRandomColor(6));

// Setting up a variables

const boxes = document.querySelectorAll('.box');
const span = document.querySelector('.rgbColor');
const colors = generateRandomColor(6);
const pickedColor = colors[Math.floor(Math.random() * 6)];
// const pickedColor = 5;
const playButton = document.querySelector('#playAgain');
const easyButton = document.querySelector('#easyButton');
const hardButton = document.querySelector('#hardButton');
const boxCount = 6;
const statusText = document.querySelector('.status');
const colorPinkish = '#f88989';

//

statusText.textContent = "Let's play!";
// span.textContent = pickedColor;

// Clicking on easyButton

easyButton.addEventListener('click', () => {
	document.querySelector('h1').style.background = colorPinkish;
	statusText.textContent = "Let's play!";
	boxCount = 3;
	this.style.background = colorPinkish;
	this.style.color = 'white';
	hardButton.style.background = colorPinkish;
	hardButton.style.color = 'white';
	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * boxCount)];
	span.textContent = pickedColor;

	for (i = 0; i < boxes.length; i++) {
		if (colors[i]) {
			boxes[i].style.background = colors[i];
		} else {
			boxes[i].style.background = 'none';
		}
	}
	console.log('Easy button clicked!');
});

// Clicking on hardButton

hardButton.addEventListener('click', () => {
	document.querySelector('h1').style.background = colorPinkish;
	statusText.textContent = "Let's play!";
	boxCount = 6;
	this.style.background = colorPinkish;
	this.style.background = 'white';
	easyButton.style.background = colorPinkish;
	easyButton.style.color = 'white';
	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * boxCount)];
	span.textContent = pickedColor;

	for (i = 0; i < boxes.length; i++) {
		boxes[i].style.background = colors[i];
		boxes[i].style.display = 'block';
	}
});

// Clicking on PlayButton

playButton.addEventListener('click', () => {
	document.querySelector('h1').style.background = colorPinkish;
	statusText.textContent = 'Let;s play!';
	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * boxCount)];
	span.textContent = pickedColor;

	for (i = 0; i < boxCount; i++) {
		boxes[i].style.background = colors[i];
	}
});

for (i = 0; i < colors.length; i++) {
	boxes[i].style.background = colors[i];
	boxes[i].addEventListener('click', () => {
		let selectedColors = this.style.background;
		if (selectedColors === pickedColor) {
			win();
		} else {
			loose(this);
		}
	});
}

function win() {
	for (i = 0; i < colors.length; i++) {
		boxes[i].style.background = pickedColor;
	}
	document.querySelector('h1').style.background = pickedColor;
	statusText.textContent = 'You won!';
}

function loose() {
	span.style.background = 'aquamarin';
	statusText.textContent = 'Try again!';
}

function generateRandomColor(number) {
	let colorArray = [];
	for (i = 0; i < number; i++) {
		colorArray.push(randomColor());
	}
}

function randomColor() {
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
