let sqlen;
let nm;
let canvasWidth = 700;
let canvasHeight = 700;

// Arrays for ocean circles
let oceanX = [];
let oceanY = [];
let oceanColor = [];
let oceanSize = [];
let bubbleCount = 300;

// Arrays for sky circles
let skyX = [];
let skyY = [];
let skyColor = [];
let skySize = [];
let skyCount = 60;

function setup() {
	sqlen = min(windowWidth, windowHeight);
	createCanvas(sqlen, sqlen);
	// Setup ocean circles
	noStroke();
	for (i = 0; i < bubbleCount; i++) {
		oceanX.push(random(canvasWidth));
		oceanY.push(random(canvasHeight/2+170, canvasHeight));
		colorMode(HSB);
		oceanColor.push(color(random(170, 220), random(40,90), random(60, 100), random(100)));
		oceanSize.push(random(5,80));
	}
	
	// Setup sky circles
	for (i = 0; i < skyCount; i++) {
		skyX.push(random(canvasWidth));
		skyY.push(random(canvasHeight-100));
		colorMode(HSB);
		skyColor.push(color(random(180,210), random(15, 100), 100));
		skySize.push(random(250,400));
	}
}

function draw() {
	nm = sqlen/700;
	scale(nm);
	colorMode(HSB);
	
	// Draw in sky
	for (i = 0; i < 2*skyCount/3; i++) {
		fill(skyColor[i]);
		skyColor[i].setAlpha(0.05);
		fill(skyColor[i]);
		circle(skyX[i], skyY[i], skySize[i]);
	}
	
	fill(200,100,100);
	triangle(-150, 600, 70, 200, 500, 700);
	translate(500, 0);
	triangle(-300, 600, 70, 180, 700, 700);
	translate(-500,0);
	
	for (i = 2*skyCount/3; i < 3*skyCount/4; i++) {
		fill(skyColor[i]);
		skyColor[i].setAlpha(0.05);
		fill(skyColor[i]);
		circle(skyX[i], skyY[i], skySize[i]);
	}
	colorMode(RGB);

	fill(70, 180, 180);
	triangle(-170, 600, 140, 250, 500, 700);
	
	fill(104, 173, 168);
	triangle(canvasWidth + 200, 500, canvasWidth - 50, 230, 350, 500);
	
	colorMode(HSB);
	
	for (i = floor(3*skyCount/4); i < floor(8*skyCount/9); i++) {
		fill(skyColor[i]);
		skyColor[i].setAlpha(0.2);
		fill(skyColor[i]);
		circle(skyX[i], skyY[i], skySize[i]);
	}

	colorMode(RGB);
	fill(96, 179, 160);
	triangle(-170, 700, 70, 300, 500, 700);
	triangle(800, 600, 300, 600, 500, 250);

	for (i = floor(8*skyCount/9); i < skyCount; i++) {
		colorMode(HSB);
		fill(skyColor[i]);
		skyColor[i].setAlpha(0.1);
		fill(skyColor[i]);
		circle(skyX[i], skyY[i], skySize[i]);
	}
	
	colorMode(RGB);
	
	fill(0, 200, 240);
	rect(0, 500, canvasWidth, 300);
	
	colorMode(HSB);
	// Sun
	fill(192, 1, 100);
	circle(550, 100, 50+3*sin(frameCount/50));
	translate(15, -100);
	
	// Sailboat
	sailY = 150 + 2*sin(frameCount/5);
	boatY = 20*sin(frameCount/55);
	boatX = canvasWidth/2 + 2*sin(frameCount/5);
	
	fill(200, 10, 100);
	triangle(boatX, sailY, canvasWidth/2, boatY + 500, canvasWidth/2-200, boatY + 500);
	triangle(boatX + 13, sailY + 80, canvasWidth/2+13, boatY+ 530, canvasWidth/2+150, boatY+ 530);
	fill(251, 57, 73);
	rect(canvasWidth/2-250, boatY+550, 450, 60);
	ellipse(canvasWidth/2-25, boatY+605, 450, 100);
	rect(canvasWidth/2+4, boatY+135, 4, 415);
	noStroke();
	fill(177, 80, 72);
	translate(-15,100);

	for (i = 0; i < bubbleCount; i++) {
		oceanColor[i].setAlpha(0.6);
		fill(oceanColor[i]);
		circle(oceanX[i], oceanY[i] + 20*sin(frameCount/55), oceanSize[i]); 
	}
}
