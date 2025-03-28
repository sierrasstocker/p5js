// Hours, minutes, seconds in binary
// Inspired by chandeliers from Lowell dining hall (looks like this irl https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2020/01/23/195944_1342004.jpg.1500x1000_q95_crop-smart_upscale.jpg)
let backR = 255;
let backG = 207;
let backB = 102;
let sqlen;
let nm;

function setup() {
	sqlen = min(window.innerWidth, window.innerHeight);
	createCanvas(sqlen, sqlen);	
	background(backR,backG,backB);
}

let chandR = 255;
let chandG = 255;
let chandB = 255;

function hrLights() {	
	colorMode(RGB);
	let rectColor = 250;
	var bulbColor = color(255,255,255,70);
	h = hour();
	
	// Convert from 24hr time
	if (h == 0) {
		h = 12;
	}
	if (h > 12) {
		h = h-12;
	}
	let chandColor = color(chandR,chandG,chandB);
	noStroke();

	// 1st
	if (h >= 8) {
		fill(255,255,255,90);
		circle(350,170,50+4*sin(frameCount/16));
		fill(255);
		h = h-8;	
	}
	else {fill(bulbColor);}
	ellipse(350, 170, 14, 22);
		
	fill(rectColor);
	rect(344, 183, 13,50,4);
	fill(chandColor);
	
	// 2nd
	if (h >= 4) {
		fill(255,255,255,90);
		circle(380,150,50+4*sin(frameCount/16));
		fill(255);
		h = h-4;
	}
	else {fill(bulbColor);}
	ellipse(380, 150, 14, 22);
	fill(rectColor);
	rect(374, 163, 13,50,4);
	fill(chandColor);
	
	// 3rd
	if (h >= 2) {
		fill(255,255,255,90);
		circle(420,150,50+4*sin(frameCount/16));
		fill(255);
		h = h-2;}
	else {
		fill(bulbColor);}
	ellipse(420, 150, 14, 22);
	fill(rectColor);
	rect(414, 163, 13, 50, 4);
	fill(chandColor);
	
	// 4th
	if (h >= 1) {
		fill(255,255,255,90);
		circle(450,170,50+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor);}
	ellipse(450, 170, 14, 22);
	fill(rectColor);
	rect(443, 183, 13, 50, 4);
	
	fill(backR,backG,backB);
	ellipse(400,230,110,40);
	
	fill(chandColor);
	stroke(chandColor);	
	chandColor.setAlpha(80);
	fill(chandColor);
	strokeWeight(3);

	ellipse(400,230,110,40);
	noStroke();
}

function minLights() {
	
	let minTrans = 20;
	translate(0,-minTrans);
	let rectColor = 250;
	minDist = 100;
	colorMode(RGB);
	var bulbColor = color(255,255,255,70);
	let chandColor = color(chandR,chandG,chandB);
	fill(bulbColor);
	
	let m = minute();
	// 1st
	if (m >= 2**5) {
		fill(255,255,255,90);
		circle(270,minDist+230,55+4*sin(frameCount/16));
		fill(255);
		m = m-2**5;
	}
	else {fill(bulbColor)}
	ellipse(270, minDist+230, 16, 27);
	fill(rectColor);
	rect(264, minDist+245, 12, 58, 4);
	
	// 2nd
	translate(0,-10);
	if (m >= 2**4) {
		fill(255,255,255,90);
		circle(320,minDist+220,55+4*sin(frameCount/16));
		fill(255);
		m = m-2**4;
	}
	else {fill(bulbColor)}
	ellipse(320, minDist+220, 16, 27);
	fill(rectColor);
	rect(314, minDist+235, 12, 58, 4);
	translate(0,10);
	
	// 3rd
	if (m >= 2**3) {
		fill(255,255,255,90);
		circle(370,minDist+200,55+4*sin(frameCount/16));
		fill(255);
		m = m-2**3;
	}
	else {fill(bulbColor)}
	ellipse(370, minDist+200, 16, 27);
	fill(rectColor);
	rect(364, minDist+215, 12, 58, 4);
	
	// 4th	
	if (m >= 2**2) {
		fill(255,255,255,90);
		circle(430,minDist+200,55+4*sin(frameCount/16));
		fill(255);
		m = m-2**2;
	}
	else {fill(bulbColor)}
	ellipse(430,minDist+200, 16, 27);
	fill(rectColor);
	rect(424, minDist+215, 12, 58, 4);
	
	// 5th
	translate(0,-10);
	if (m >= 2) {
		fill(255,255,255,90);
		circle(480,minDist+220,55+4*sin(frameCount/16));
		fill(255);
		m = m-2;}
	else {fill(bulbColor)}
	ellipse(480, minDist+220, 16, 27);
	fill(rectColor);
	rect(474,minDist+235,12,58,4);
	translate(0,10);
	
	// 6th
	if (m>= 1) {
		fill(255,255,255,90);
		circle(530,minDist+230,55+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(530, minDist+230, 16, 27);
	fill(rectColor);
	rect(524, minDist+245, 12, 58, 4);
	
	stroke(chandColor);	
	strokeWeight(5);
	chandColor.setAlpha(80);
	fill(backR,backG,backB);
	ellipse(400,401,265,55);
	fill(chandColor);
	ellipse(400,401,265,55);
	noStroke();
		translate(0,minTrans);
}

function secLights() {
	colorMode(RGB)
	hrDist = 160;	
	let s = second();
	let rectColor = 250;
	let chandColor = color(chandR, chandG, chandB);
	fill(rectColor);
	rect(423, hrDist+297, 13,60,5);
	rect(363, hrDist+297, 13,60,5);
	rect(493, hrDist+307, 13,60,5);
	rect(293, hrDist+307, 13,60,5);
	translate(19,6);
	rect(543, hrDist+317, 13,60,5);
	translate(-19,-6);

	translate(-19,6);
		rect(243, hrDist+317, 13,60,5);
	translate(19,-6)
	noFill();
	var bulbColor = color(255,255,255,70);
	fill(bulbColor);
	
	stroke(chandColor);	
	strokeWeight(7);
	chandColor.setAlpha(80);
	fill(backR,backG,backB);
	ellipse(400,550,350,65);
	fill(chandColor);
	ellipse(400,550,350,65);
	noStroke();
	
	// 1st
	translate(-19,6);
	if (s >= 2**5) 
	{ s=s-2**5
		fill(255,255,255,90);
		circle(250,hrDist+300,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(250, hrDist+300, 18, 30);	
	translate(19,-6);
	
	// 2nd
	if (s >= 2**4)
	{ s = s-2**4;
		fill(255,255,255,90);
		circle(300,hrDist+290,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(300, hrDist+290, 18, 30);	
	
	// 3rd
	if (s >= 2**3) {
		s = s-2**3;
		fill(255,255,255,90);
		circle(370,hrDist+280,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(370, hrDist+280, 18, 30);	
	
	// 4th
	if (s >= 2**2) {
		s = s - 2**2;
		fill(255,255,255,90);
		circle(430,hrDist+280,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(430, hrDist+280, 18, 30);
	
	// 5th
	if (s >= 2) {
		s = s - 2;
		fill(255,255,255,90);
		circle(500,hrDist+290,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(500, hrDist+290, 18, 30);
	
	// 6th	
	translate(19,6);
	if (s >= 1) {
		fill(255,255,255,90);
		circle(550,hrDist+300,60+4*sin(frameCount/16));
		fill(255);}
	else {fill(bulbColor)}
	ellipse(550, hrDist+300, 18, 30);
	translate(-19,-6);
}
	let angle = 0;
	let vel = 0.0003;
	let centerX = 400;
	let centerY = 0;

function draw() {
	nm = sqlen/800
	scale(nm);
	colorMode(RGB);
	background(backR,backG,backB);
	
  rotate(angle);
	angle = angle + vel;
	
	if (angle >= 0.02) {
    vel = -0.0003;
  } else if (angle <= -0.02) {
    vel = 0.0003;
  }
	
	let rectColor = 250;
	let chandColor = color(chandR, chandG, chandB);
	strokeWeight(4);
	stroke(chandColor);
	line(400,-200,400,580);
	noStroke();
	secLights();
	minLights();
	hrLights();
	strokeWeight(4);
	chandColor.setAlpha(255);
	stroke(chandColor);
	line(400,500,400,580);
	line(400,350,400,410);
	line(400,210,400,250);	
}
