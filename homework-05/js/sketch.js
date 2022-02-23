var namesIdle = [];
var namesRunL = [];
var namesRunR = [];

var count = 0;

var idleImg = [];
var runLImg = [];
var runRImg = [];

var idleObj = [];
var runLObj = [];
var runRObj = [];
var currentObj = [];
var currentAnim = [];


var interval;
var index = 0;

function preload() {

  namesIdle = loadStrings("./assets/idle.txt");
  namesRunL = loadStrings("./assets/runL.txt");
  namesRunR = loadStrings("./assets/run.txt");
}

function setup() {

  createCanvas(displayWidth, displayHeight);

  for(var k = 0; k < namesIdle.length; k++) {
    idleObj.push(new imageclass(namesIdle[k], 100,100,335,235));
    idleImg[k] = idleObj[k].getImage();
  }

  for(var k = 0; k < namesRunL.length; k++) {
    runLObj.push(new imageclass(namesRunL[k], 100,100,335,235));
    runLImg[k] = runLObj[k].getImage();
    runRObj.push(new imageclass(namesRunR[k], 100,100,335,235));
    runRImg[k] = runRObj[k].getImage();
  }
  currentAnim = idleImg;
  interval = setInterval(cycle, 100);
  currentObj = idleObj;

  //console.log(currentObj[0].getImage());
}

function draw () {
  background(120)

  if(keyIsPressed) {
    clearInterval(interval);
    interval = null;
    index++;

    if(index > 3) {
      cycle();
      index = 0;
    }

    if(key == "d") {
      //set current obj and anim
      currentAnim = runRImg;
      currentObj = runRObj;
      if (i >= currentAnim.length) {
        i=0;
      }
      //Move x of current obj
      currentObj[i].moveX(currentObj[i].getX() + 2);

      //Apply movement to opposite array
      for(var i = 0; i < runLObj.length; i++) {
        runLObj[i].moveX(currentObj[0].getX());
      }
      //Apply 'current' movement to original array
      runRObj = currentObj;
    }
    else if(key == "a") {
      currentAnim = runLImg;
      currentObj = runLObj;
      if (i >= currentAnim.length) {
        i=0;
      }

      currentObj[i].moveX(currentObj[i].getX() - 2);
      for(var i = 0; i < runRObj.length; i++) {
        runRObj[i].moveX(currentObj[0].getX());
      }
      runLObj = currentObj;
    }

    //Apply new positions to idle
    for( var i = 0; i < idleObj.length; i++) {
      idleObj[i].moveX(currentObj[0].getX());
    }

  }  else {
    currentObj = idleObj;
    currentAnim = idleImg;
    //console.log(currentObj[0].getImage());

    if(interval == null) {
      interval = setInterval(cycle, 100);
    }
  }
  console.log(currentObj[count].getImage());
  image(currentAnim[count],
    currentObj[count].getX(),
    currentObj[count].getY(),
    currentObj[count].getH(),
    currentObj[count].getW());

}

function cycle() {

  count+=1;

  if(count >= currentAnim.Length) {
    count=0
  }

}
