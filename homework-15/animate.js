var img = [];
var anim = [];
let object;

let i = 0;

// Ten images arranged forward then backward
function preload() {
  object = loadImage('assets/myMovie0.png');
  img[0] = object;
  object = loadImage('assets/myMovie1.png');
  img[1] = object;
  object = loadImage('assets/myMovie2.png');
  img[2] = object;
  object = loadImage('assets/myMovie3.png');
  img[3] = object;
  object = loadImage('assets/myMovie4.png');
  img[4] = object;
  object = loadImage('assets/myMovie5.png');
  img[5] = object;
  object = loadImage('assets/myMovie6.png');
  img[6] = object;
  object = loadImage('assets/myMovie7.png');
  img[7] = object;
  object = loadImage('assets/myMovie8.png');
  img[8] = object;
  object = loadImage('assets/myMovie9.png');
  img[9] = object;
  object = loadImage('assets/myMovie10.png');
  img[10] = object;
  object = loadImage('assets/myMovie11.png');
  img[11] = object;
  object = loadImage('assets/myMovie12.png');
  img[12] = object;
  object = loadImage('assets/myMovie13.png');
  img[13] = object;
  object = loadImage('assets/myMovie14.png');
  img[14] = object;
  object = loadImage('assets/myMovie15.png');
  img[15] = object;
  object = loadImage('assets/myMovie16.png');
  img[16] = object;
  object = loadImage('assets/myMovie17.png');
  img[17] = object;
  object = loadImage('assets/myMovie18.png');
  img[18] = object;
  object = loadImage('assets/myMovie19.png');
  img[19] = object;


  for(var i = 0; i < img.length; i++) {
    anim[i] = img[i].getImage();
  }

}

function setup() {
    createCanvas(640,480);
    setInterval(incrementIndex, 100);
}

function draw()
{
    background(120);
      image(img[i], 0,0);
}

function incrementIndex()
{
     i += 1;
     if (i >= img.length) {
         i = 0;
     }
}
