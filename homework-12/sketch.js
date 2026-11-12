let canvas
let sound1;
let sound2;
let sound3;
let sound4;

async function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent("sketch-holder");
  textSize(40);
  textAlign(CENTER, CENTER)

  sound1 = await loadSound('./assets/sound1.wav');
  sound2 = await loadSound('./assets/sound2.wav');
  sound3 = await loadSound('./assets/sound3.wav');
  sound4 = await loadSound('./assets/sound4.wav');
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
textSize(60);
textWeight(900);
text('Sound Selection', width * 0.5, 60);

fill(80);
textSize(40);
textWeight(500);
text('1', 165, 182);
text('2', 165, 275);
text('3', 165, 370);
text('4', 165, 465);

fill(0);
textSize(20);
textWeight(400);
text('Electric Guitar Loop', 295, 170);
text('Electric Bassline', 280, 265);
text('Electric Piano Loop', 293, 360);
text('Punchy Drums', 273, 450);
}

//play sounds with key presses
function keyPressed() {
  if (key === '1') {
     if(sound1.isPlaying()) {
      sound1.stop();
     }
    else {
      sound1.start();
     }
  }

  if (key === '2') {
     if(sound2.isPlaying()) {
      sound2.stop();
     }
    else {
      sound2.start();
     }
  }

  if (key === '3') {
     if(sound3.isPlaying()) {
      sound3.stop();
     }
    else {
      sound3.start();
     }
  }

  if (key === '4') {
     if(sound4.isPlaying()) {
      sound4.stop();
     }
    else {
      sound4.start();
     }
  }
}