let num;

function setup() {
  createCanvas(800, 600, WEBGL);
  num = random(1,9);
}

function draw() {
  background(250);
  normalMaterial();
  rotateY(frameCount * 0.01);
  orbitControl();

  translate(-240, 0, 40);
  push();
  rotateZ(sin(frameCount * 0.01));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(70);
  pop();

  translate(240, 100, -40);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(sin(frameCount * 0.02));
  rotateY(frameCount * 0.02);
  box(70, 30, 30);
  pop();

  translate(240, 0, 100);
  push();
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * 0.03);
  rotateY(sin(frameCount * 0.03));
  torus(65, 20);
  pop();

  translate(-300,-200,0);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 5; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 10,
        sin(frameCount * 0.001 + j) * 10,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);

      push();
      if  (num <= 3) {
        rotateZ(sin(frameCount * 0.01));
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        plane(20);
      } else if (num >= 7) {
        rotateZ(frameCount * 0.01);
        rotateX(sin(frameCount * 0.01));
        rotateY(frameCount * 0.01);
        box(20, 20, 20);
      } else {
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(sin(frameCount * 0.01));
        torus(20, 10);
      }
      pop();
    }
    pop();
  }

} // end draw
