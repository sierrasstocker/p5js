let notes = [];
let colors = ["#78E1CB", "#9678E1", "#E1788E", "#C2E178"];

function setup() {
	sqlen = min(windowWidth, windowHeight)
	createCanvas(sqlen, sqlen);
	notes.push(new Note(500, 260));
}

class Note {
	constructor(x, y) {
		this.pos = createVector(509, 260);
		this.velocity = createVector(random(3,4)+2*sin(frameCount/4.6)+2*sin(frameCount/3.5), random(-3,1)+1.2*sin(frameCount/4.6)+1.2*sin(frameCount/3.5));
		this.color = random(colors);
	}
	
	show() {
		stroke(this.color);
		strokeWeight(random(5,6));
		line(this.pos.x, this.pos.y, this.pos.x - this.velocity.x, this.pos.y - this.velocity.y);
	}
	
	update() {
		this.pos.add(this.velocity)
	}
}

function draw() {
	nm = sqlen/700
	scale(nm);
	notes.push(new Note(500, 260));
	fill(color('#4cb3ad'));
	strokeWeight(15);
	stroke(color('#EDAE49'));
	rect(0,0,700,700);
	fill(color('#B34C52'));
	strokeWeight(10);
	noStroke();
	circle(350,350,500+20*sin(frameCount/15));
	
	stroke(color('#EDAE49'));
	noFill();
	
	// Trumpet body
	rotate(-0.4);
	translate(-200, 120);
	rect(220-5*sin(frameCount/5), 300, 250, 100, 20);
	rect(285, 280+3*sin(frameCount/3), 20, 140, 20);
	rect(335, 280-3*sin(frameCount/3), 20, 140, 20);
	rect(385, 280+3*sin(frameCount/3), 20, 140, 20);
	rect(120+2*sin(frameCount/5), 300, 400, 20, 20);
	
	// 	Reset
	translate(200, -120);
	rotate(0.4);
	translate(450, 210);
	strokeWeight(20);
	stroke(color('#EDAE49'));
	arcSize = 80 + 20*(sin(frameCount/4.6)+sin(frameCount/3.5));
	arc(50, 50, arcSize, arcSize, PI/2.5, -PI/1.5, CHORD);
	translate(-450,-210);
	
	notes.forEach((note) => {
		note.update();
		note.show();
	});
}
