function setup() {
  canvas = createCanvas(450,450);
  background('pink');
  canvas.parent('processing');
  //noLoop();
}
function tekenKerk(kleur,kleurRondje){

  fill(kleur);
  rect(300,175,100,300);
  fill('DarkSeaGreen');
  triangle(300,175,400,175,350,75);
  fill(kleurRondje);
  ellipse(350,250,50,50);
}
function draw() {
  noStroke();
  tekenKerk('lightgreen', 'white');

  translate(-150,0);
  tekenKerk('white', 'lightgreen');

  translate(-150,0);
  tekenKerk('lightgreen', 'white');
}