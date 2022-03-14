var ninjaObjects;
var object;
var objHealth = 100;
const particles = [];

function setup() {
    createCanvas(800,600);

    ninjaObjects = createSprite(175, 200);
    ninjaObjects.addAnimation('idle', 'assets/Idle__000.png', 'assets/Idle__009.png');
    ninjaObjects.addAnimation('runR', 'assets/Run__000.png', 'assets/Run__009.png');
    ninjaObjects.addAnimation('runL', 'assets/RunL__000.png', 'assets/RunL__009.png');
    ninjaObjects.addAnimation('attack', 'assets/Attack__000.png', 'assets/Attack__009.png');

    object = createSprite(400, 549);
    object.addImage(loadImage('./assets/object.png'));
}


function draw()
{
    background(120);

    ninjaObjects.debug = mouseIsPressed;
    object.debug = mouseIsPressed;

    controller();
    win();
    drawSprites();
}

class Particle {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}

function createParticles(x,y) {

  for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
  }
}

//Function to handle attack collisions and object destruction
function event () {
  if (objHealth > 0) {
    if(dist(ninjaObjects.position.x, ninjaObjects.position.y, object.position.x, object.position.y) < 400) {
      createParticles(object.position.x, object.position.y);
      objHealth --;
    }
  } else if (objHealth <= 0) {
          object.remove();
    }
}

function win() {
  if (objHealth <= 0) {
    textSize(32);
    text('You did it!', 400, 300);
    fill(0, 102, 153, 51);
  }
}

function controller() {

  if(keyDown('d'))
  {
    ninjaObjects.changeAnimation('runR');
    ninjaObjects.velocity.x += .5;

    if(ninjaObjects.collide(object))
    {
      ninjaObjects.changeAnimation('idle');
    }
  }
  else if (keyDown('a')) {

    ninjaObjects.changeAnimation('runL');
    ninjaObjects.velocity.x -= .5;

    if(ninjaObjects.collide(object))
    {
      ninjaObjects.changeAnimation('idle');
    }
  }
  else if (keyDown('w')) {

      ninjaObjects.changeAnimation('runR');
      ninjaObjects.velocity.y -= .5;

      if(ninjaObjects.collide(object))
      {
        ninjaObjects.changeAnimation('idle');
      }
  }
  else if (keyDown('s')) {

    ninjaObjects.changeAnimation('runR');
    ninjaObjects.velocity.y += .5;

    if(ninjaObjects.collide(object))
    {
      ninjaObjects.changeAnimation('idle');
    }
  }
  else if (keyDown('x')) {

    ninjaObjects.changeAnimation('attack');
    //event called while attacking
    event();
  }
  else
  {
    ninjaObjects.changeAnimation('idle');
    ninjaObjects.velocity.x = 0;
    ninjaObjects.velocity.y = 0;
  }
}
