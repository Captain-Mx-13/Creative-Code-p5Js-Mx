let canvas 

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent("sketch-holder");
  textSize(40);
  textAlign(CENTER, CENTER)
}

function draw() {
background(199, 198, 172);
//triangles
strokeWeight(0);
fill(163, 150, 110);
triangle(20, 400, 500, 580, 700, 20);
fill(163, 150, 110);
triangle(10, 40, 220, 10, 200, 250);

//center box
strokeWeight(10);
fill(115, 115, 107);
rect(100, 120, 600, 400);

//"scroll" on the side 
fill(0);
strokeWeight(15);
line(680, 140, 680, 500);
fill(200, 222, 219);
line(680, 150, 680, 250);

// song rectangles
fill(250, 185, 200);
strokeWeight(5);
rect(120, 140, 540, 80);
fill(56, 195, 255);
rect(120, 235, 540, 80);
fill(255, 208, 56);
rect(120, 330, 540, 80);
fill(176, 98, 237);
rect(120, 425, 540, 80);

// number squares
strokeWeight(0);
fill(255, 222, 230);
square(135, 150, 60);
fill(174, 231, 255);
square(135, 245, 60);
fill(255, 233, 161);
square(135, 340, 60);
fill(220, 184, 247);
square(135, 435, 60);

// text
fill(0)
textWeight(900);
text('Sound Selection', width * 0.5, 60);

fill(80);
textWeight(500);
text('1', 165, 180);
text('2', 165, 280);
}