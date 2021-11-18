function setup() {
  canvas = createCanvas(1000,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw(...args: []) {
  // witte cirkel zonder rand
  noStroke();
  fill('white');
  ellipse(250, 250, 300);
}
