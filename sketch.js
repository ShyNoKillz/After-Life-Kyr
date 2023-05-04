var startSize = 100;
var endSize;

//The setup function only happens once
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('power');
}


function draw() {
  // black rectangle
  fill(0);
  noStroke();
  rect(0, 0, width / 2, height);

  // white rectangle
  fill(255);
  noStroke();
  rect(width / 2, 0, width / 2, height);

  // rectangle or circle follows the mouse
  var shapeX = mouseX - startSize / 2;
  var shapeY = mouseY - startSize / 2;

  if (mouseX > width / 2) {
    // inside white rectangle, draw a circle
    endSize = 50;
    var circleSize = lerp(startSize, endSize, 0.05); // interpolate
    noStroke(); // remove the stroke
    fill(random(255), random(255), random(255), 150); // generate a new random color
    ellipse(mouseX, mouseY, circleSize, circleSize);
    startSize = circleSize; // update startSize for next frame
  } else {
    // inside black rectangle, draw a rectangle
    endSize = 80;
    var rectSize = lerp(startSize, endSize, 0.05); // interpolate
    fill(240, 128, startSize);
    strokeWeight(5);
    rect(shapeX, shapeY, rectSize, 80);
    startSize = rectSize; // update startSize for next frame
  }
}
