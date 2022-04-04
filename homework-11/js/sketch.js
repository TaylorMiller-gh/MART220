class toolMan {
  constructor (w, h, d, rX, rY, rZ, tX, tY, tZ, texture) {
    this.w = w;
    this.h = h;
    this.d = d;
    this.rX = rX;
    this.rY = rY;
    this.rZ = rZ;
    this.tX = tX;
    this.tY = tY;
    this.tZ = tZ;
    this.texture = texture;
  }

  draw(frame) {
    push();
    translate(this.tX, this.tY, this.tZ);
    rotateX(this.rX*frame);
    rotateY(this.rY*frame);
    rotateZ(this.rZ*frame);
    texture(this.texture);
    box(this.w,this.h,this.d);
    pop();
  }


}


let texture1;
let texture2;
let texture3;
let texture4;
let texture5;
let tireRim;
let trTexture;

let shapes = [];

let posX = 100;
let posY = 100;
let posZ = 100;
let posX1 = 100;
let posY1 = 100;

function preload() {

  texture1 = loadImage('assets/texture1.JPG');
  texture2 = loadImage('assets/texture2.JPG');
  texture3 = loadImage('assets/texture3.JPG');
  texture4 = loadImage('assets/texture4.JPG');
  texture5 = loadImage('assets/uuueeeggghhh.JPG');

  tireRim = loadModel('assets/rim_m9b_1k.obj', true);
  trTexture = loadImage('assets/based.JPG');
}

function setup() {

  createCanvas(800, 600, WEBGL);

  shapes.push(new toolMan(30,20,30,.05,.05,.05, -posX, posY, posZ, texture1));
  shapes.push(new toolMan(20,30,20,.02,.02,.05, posX+10, -posY+10, posZ-200, texture2));
  shapes.push(new toolMan(20,20,30,.05,.1,.05, posX-50, posY+10, posZ-100,texture3));
  shapes.push(new toolMan(30,30,20,.05,.05,.03, posX+60, posY-20, -posZ+20,texture4));
  shapes.push(new toolMan(50,20,20,.05,.03,.01, posX1-100, posY1-40, posZ+50,texture5));

}

function draw() {
  background(200);
  normalMaterial();
  image(trTexture);

  //textSize(32);
  //text('A tire rim, my kingdom for a tire rim...', 10, 10);
  //text('Taylor Miller', 600, 600);


  push();
  scale(1.5);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(trTexture);
  model(tireRim);


  for(var i =0; i < shapes.length; i++) {
    shapes[i].draw(frameCount);
  }
  pop();

  if (mouseIsPressed) {

    for(var i = 0; i < shapes.length; i++) {

      shapes[i].tX = floor(random(-150, 150));
      shapes[i].tY = floor(random(-150, 150));
      shapes[i].tZ = floor(random(-150, 150));
    }

    //console.log(posX1);
    //console.table(shapes);
  }
}
