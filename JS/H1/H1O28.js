var aantal = 5;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lightblue');
  fill('black');
  text("aantal = " + aantal,10,20);    
  translate(225,225);
  
  // tekenen rode bladeren
  for(var n= 0; n < aantal; n++) {
    fill('lightyellow');
    ellipse(0,0,400,50);
    rotate(360 / aantal);  
  }
 
  
  // gele vulkleur
  for(var n= 0; n < 25; n++) {
  fill(
    rgb(254, 255, 171)
    );
  rect(0,0,75,75);
  rotate(75/aantal);
}
  


  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}