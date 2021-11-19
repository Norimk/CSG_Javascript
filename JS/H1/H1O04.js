function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(100,280,200,280,150,200);
  // deur
  noStroke();
  rect(125,330,30,50);
  // maan
  fill('khaki');
  ellipse(350,100,150);
  // boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,230,100,150);
}
