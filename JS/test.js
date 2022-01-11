var visX = 2;
var visY = 1;


function setup() {
  canvas = createCanvas(600,400);
  canvas.parent('processing');
  frameRate(30);
  background('lightblue');
}



function draw() {
  noStroke();
  fill('brown');
  rect(0,350,600,50);

  if(mouseX < 300) {
    fill('red');
  }
  else{
    fill('yellow');
  }
  visX = visX + 1;
visY =
  translate(visX,visY)
  tekenVis();
  }



  function tekenVis() {
    ellipse(100,100,50);
    triangle(100,100,50,50, 50,150);
    if(mouseX < 300) {
      fill('red');
    }
  }