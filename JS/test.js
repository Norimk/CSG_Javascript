function setup() {
  canvas = createCanvas(900,450);
  canvas.parent('processing');
  noLoop();
  //noStroke();
}



function draw() {
  background(230);
  translate(0,50);
  fill('yellow');
  rect(25,-25,800,50);



  push();



  translate(50,0);
  teamLid();



  pop();



  translate(0,75);
}



function teamLid() {
  push();
  fill(255,0,255);
  ellipse(0,0,40);
  stroke(4);
  fill(0);
  bezier(-10,15,5,0,10,0,15,10);
  ellipse(-10,-5,10);
  ellipse(10,-5,10);
  pop();
}