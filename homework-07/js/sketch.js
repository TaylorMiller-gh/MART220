var ninjaObjects;
//var idle;
//var runR;
//var runL;
var object;

/* Couldn't get this method to work. Problem with syntax I think - loads strings not images

function preload() {
  idle = loadStrings('./assets/idle.txt');
  runR = loadStrings('./assets/run.txt');
  runL = loadStrings('./assets/runL.txt');
}
*/

function setup() {
    createCanvas(800,600);


    /* loaded strings into the image arrays causing an 'Frame Undefined' warning.

    ninjaObjects = createSprite(200, 200);
    ninjaObjects.addAnimation('idle', idle[0], idle[idle.length-1]);
    ninjaObjects.addAnimation('runR', runR[0], runR[runR.length-1]);
    ninjaObjects.addAnimation('runL', runL[0], runL[runL.length-1]);
    */

    ninjaObjects = createSprite(175, 200);
    ninjaObjects.addAnimation('idle', 'assets/Idle__000.png', 'assets/Idle__009.png');
    ninjaObjects.addAnimation('runR', 'assets/Run__000.png', 'assets/Run__009.png');
    ninjaObjects.addAnimation('runL', 'assets/RunL__000.png', 'assets/RunL__009.png');

    object = createSprite(400, 549);
    object.addImage(loadImage('./assets/object.png'));
    //console.log(idle.join());
    console.log(ninjaObjects);
}


function draw()
{
    background(120);

    controller();

    ninjaObjects.debug = mouseIsPressed;
    object.debug = mouseIsPressed;

    drawSprites();
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
  else
  {
    ninjaObjects.changeAnimation('idle');
    ninjaObjects.velocity.x = 0;
    ninjaObjects.velocity.y = 0;
  }
}
