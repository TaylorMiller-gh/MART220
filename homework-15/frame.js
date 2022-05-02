var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {

  let num = Math.floor(Math.random() * 3);
  let alpha = random(80)+20;

      if (num == 2) {
        let red = 11;
        let green = 143;
        let blue = 127;
        fill(red,green,blue, alpha);
      } else if (num == 1) {
        let red = 219;
        let green = 99;
        let blue = 212;
        fill(red,green,blue, alpha);
      } else {
        let red =219;
        let green = 188;
        let blue = 66;
        fill(red,green,blue, alpha);
      }
  //  fill(red,green,blue, random(100));

    var size= random(200);

    circle(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    //saveFrames("myMovie",".png",1,25);

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }
}
