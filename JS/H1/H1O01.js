function setup() {
  canvas = createCanvas(500,500);
  background('lightblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  //maan
  fill('lightyellow');
  ellipse(50,50,60);
 for(var n= 1;n <= 4;n ++) {
   tekenKerk();
   translate(110,0);
 }
}

function tekenKerk() {
  fill('pink');
  rect(200,250,100,300);
  fill('red');
  triangle(200,250,300,250,250,150);
}