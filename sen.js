<!--線が動いて、塗りつぶされていく-->
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


new p5();

var boop = random(150);

function setup() {
    createCanvas(200,200);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(110);
}

new p5();

var boop = random(150);


// Move the mouse left and right to see the curve change
function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  let backgroundColor = color(100, 50, 150);
function draw() {
  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
};
  let t = map(mouseX, 20, width, 105, -155);
  curveTightness(t);
  beginShape();
  curveVertex(0, 300);
  curveVertex(300, 0);
  curveVertex(150,150);
  curveVertex(75, 75);
  curveVertex(30, 30);
  curveVertex(12, 6);
  endShape();
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function draw() {
  background(300);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1500, 140));
  rect(0, 0, 20, 20);
}
