function setup() {
  createCanvas(500, 600);
  noStroke();
}

function draw() {
  // set up ground and sky
  background(43, 59, 53);
  fill(82, 76, 71);
  rect(0, height * 0.6, 500, height * 0.4);
  fill(56, 52, 49);
  rect(0, 450, width, 200);

  // background buildings
  fill(48, 35, 29);
  rect(205, 25, 100, 335);
  
  fill(48, 47, 29);
  rect(125, 5, 100, 355);

  fill(41, 48, 29);
  rect(230, 50, 110, 310);

  //moving car
  fill(10);
  circle(mouseX, height * 0.63, 20);
  circle(mouseX+50, height * 0.63, 20);

  fill(33)
  rect(mouseX, height * 0.58, 70, 30)
  rect(mouseX-20, height * 0.605, 20, 15)

  // front of close buildings: left, right 
  fill(107, 61, 29);
  rect(0, 0, width * 0.25, 600);

  fill(105, 50, 22);
  rect(width * 0.75, 0, width * 0.25, 600);

  // sides of close buildings: left, right
  fill(87, 50, 23);
  rect(width * 0.25, 0, 60, 450);
  fill(87, 50, 23);
  triangle(125, 450, 185, 450, 125, 600);

  fill(79, 38, 17);
  rect(315, 0, 60, 450);
  fill(79, 38, 17);
  triangle(315, 450, 375, 450, 375, 600);

  // window frames for close buildings
  fill(65, 69, 64)
  rect(10, 10, 80, 120);
  rect(10, 170, 80, 120);
  rect(10, 330, 80, 120);
  rect(410, 10, 80, 120);
  rect(410, 170, 80, 120);
  rect(410, 330, 80, 120);

  // windows for close buildings
  fill(107, 112, 105);
  rect(15, 15, 70, 110);
  rect(15, 175, 70, 110);
  rect(15, 335, 70, 110);
  rect(415, 15, 70, 110);
  rect(415, 175, 70, 110);
  rect(415, 335, 70, 110);
}