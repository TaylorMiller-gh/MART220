/*
- --------------        TODO:       --------------------

  Need to use Node.js to test audio functions, or so I was told?
  "Cannot load a local resource"

  In order to have a backtrack and keyboard, I believe I need to get the Audio
  sources from the track and keys to create a new audio element. This will be
  set it as the main output. I won't know for sure without testing.
  (Reference: getSource(), setSource(), and connect())

  Buttons will be made into a class. Keyboard may become javascript button.

  Loop functions are looking less feasible for this scope. I could use the space
  to load a second keyboard and eliminate the 'choose synth buttons' entirely.

  p5.sound has built in functions that are useful for an audiovis (p5.fft)
  (Reference: fft.analyze() and fft.waveform())
*/

let trackNum = 1;
let synthNum = 1;
let tutNum = 0;

let timerValue = 1;

let logo;
let logoX = 300;
let logoY = 10;

//Sound Files
let track1;
let track2;
let track3;
let track4;
let track5;

//Track Selector Buttons
let trackB1;
let trackB2;
let trackB3;
let trackB4;
let trackB5;

//Button Position
let trackBPosX = 15;
let trackBPosY = 250;

//Synth Selector Buttons
let synthB1;
let synthB2;
let synthB3;

//Synth button positions
let synthBPosX = 895;
let synthBPosY = 320;

/*
  Synth Tones - Not used yet

var s1LowA, s1LowB, s1LowC, s1LowD, s1LowE, s1LowF, s1LowG;
var s1HighA, s1HighB, s1HighC, s1HighD, s1HighE, s1HighF, s1HighG;

var s2LowA, s2LowB, s2LowC, s2LowD, s2LowE, s2LowF, s2LowG;
var s2HighA, s2HighB, s2HighC, s2HighD, s2HighE, s2HighF, s2HighG;

var s3LowA, s3LowB, s3LowC, s3LowD, s3LowE, s3LowF, s3LowG;
var s3HighA, s3HighB, s3HighC, s3HighD, s3HighE, s3HighF, s3HighG;
*/

//return to Menu button
let home;

//Keyboard positions and dimensions
keyX = 150;
keyY = 100;
keyWidth = 50;
keyHeight = 200;

//Loop Button positions and dimensions
loopX = 300;
loopY = 350;
loopWidth = 125;
loopHeight = 125;

/* Need to set up Node.js to test the audio. "Cannot load local resources"
   I might still replace the reloaded keys with an oscillator.
  soundFormats('mp3');

function preload() {

  track1 = loadSound('./audio/dontaskalexSlow.mp3');
  track2 = loadSound('./audio/newHighwaysEightiesInstrumental.mp3');
  track3 = loadSound('./audio/newHighwaysNuTranceKit.mp3');
  track4 = loadSound('./audio/dontaskalexSlow.mp3');
  track5 = loadSound('./audio/newHighwaysNuTranceKit.mp3');

  s1LowA = loadSound(lowA1.mp3);
  s1LowB = loadSound(lowB1.mp3);
  s1LowC = loadSound(lowC1.mp3);
  s1LowD = loadSound(lowD1.mp3);
  s1LowE = loadSound(lowE1.mp3);
  s1LowF = loadSound(lowF1.mp3);
  s1LowG = loadSound(lowG1.mp3);
  s1HighA = loadSound(highA1.mp3);
  s1HighB = loadSound(highB1.mp3);
  s1HighC = loadSound(highC1.mp3);
  s1HighD = loadSound(highD1.mp3);
  s1HighE = loadSound(highE1.mp3);
  s1HighF = loadSound(highF1.mp3);
  s1HighG = loadSound(highG1.mp3);

  s2LowA = loadSound(lowA2.mp3);
  s2LowB = loadSound(lowB2.mp3);
  s2LowC = loadSound(lowC2.mp3);
  s2LowD = loadSound(lowD2.mp3);
  s2LowE = loadSound(lowE2.mp3);
  s2LowF = loadSound(lowF2.mp3);
  s2LowG = loadSound(lowG2.mp3);
  s2HighA = loadSound(highA2.mp3);
  s2HighB = loadSound(highB2.mp3);
  s2HighC = loadSound(highC2.mp3);
  s2HighD = loadSound(highD2.mp3);
  s2HighE = loadSound(highE2.mp3);
  s2HighF = loadSound(highF2.mp3);
  s2HighG = loadSound(highG2.mp3);

  s3LowA = loadSound(lowA3.mp3);
  s3LowB = loadSound(lowB3.mp3);
  s3LowC = loadSound(lowC3.mp3);
  s3LowD = loadSound(lowD3.mp3);
  s3LowE = loadSound(lowE3.mp3);
  s3LowF = loadSound(lowF3.mp3);
  s3LowG = loadSound(lowG3.mp3);
  s3HighA = loadSound(highA3.mp3);
  s3HighB = loadSound(highB3.mp3);
  s3HighC = loadSound(highC3.mp3);
  s3HighD = loadSound(highD3.mp3);
  s3HighE = loadSound(highE3.mp3);
  s3HighF = loadSound(highF3.mp3);
  s3HighG = loadSound(highG3.mp3);
}
*/

function setup() {
  createCanvas(1000, 500);

  //Draw Menu button (top right)
  homeButton();

  //Draw Track and synth buttons; assign mousePressed functions
  trackButtonList();
  synthButtonList();

  setInterval(timeIt, 1000);

}

function draw() {
  background(220);
  //Draw Prompt (left corner)
  prompt();

  //Draw title (center)
  drawTitle();

  //Draw keyboard (nonfunctional)
  drawKeyboard();

  //Draw Loop buttons (nonfunctional - may be removed)
  drawLoops();

  //Beat Counter (Needs to be put into a function)
  if (timerValue <= 4) {
    text(timerValue, 50, 150);
  }
  if (timerValue > 4 ) {
    timerValue = 1;
    text(timerValue, 50, 1500);
  }
}

function timeIt() {
  if (timerValue < 5) {
    timerValue++;
  }
}

/*
  Buttons will be made into a class and created with a for loop in the next iteration.
*/

function homeButton() {

  //Set colors
  let silver = color(153, 153, 153);
  let maroon = color(102, 0, 51);

  //Create and stylize button
  home = createButton(" Return to Menu");
  home.style('font-size', '22px');
  home.style('background-color', silver);
  home.style('color' , maroon);
  home.position(835, 10);

  //Functionality
  home.mousePressed(returnToMenu);
}

function returnToMenu () {
  console.log("I'll go home now.");
}

function trackButtonList () {

    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);
    let trackB1 = createButton (" Track " + trackNum);
    trackB1.style('font-size' , '30px');
    trackB1.style('background-color', silver);
    trackB1.style('color' , maroon);
    trackB1.position(trackBPosX, trackBPosY);
    trackB1.mousePressed(playTrack1);
    trackNum++;
    trackBPosY += 50;

    let trackB2 = createButton (" Track " + trackNum);
    trackB2.style('font-size' , '30px');
    trackB2.style('background-color', silver);
    trackB2.style('color' , maroon);
    trackB2.position(trackBPosX, trackBPosY);
    trackB2.mousePressed(playTrack2);
    trackNum++;
    trackBPosY += 50;

    let trackB3 = createButton (" Track " + trackNum);
    trackB3.style('font-size' , '30px');
    trackB3.style('background-color', silver);
    trackB3.style('color' , maroon);
    trackB3.position(trackBPosX, trackBPosY);
    trackB3.mousePressed(playTrack3);
    trackNum++;
    trackBPosY += 50;

    let trackB4 = createButton (" Track " + trackNum);
    trackB4.style('font-size' , '30px');
    trackB4.style('background-color', silver);
    trackB4.style('color' , maroon);
    trackB4.position(trackBPosX, trackBPosY);
    trackB4.mousePressed(playTrack4);
    trackNum++;
    trackBPosY += 50;

    let trackB5 = createButton (" Track " + trackNum);
    trackB5.style('font-size' , '30px');
    trackB5.style('background-color', silver);
    trackB5.style('color' , maroon);
    trackB5.position(trackBPosX, trackBPosY);
    trackB5.mousePressed(playTrack5);
    trackNum = 1;
}

function synthButtonList () {

    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);

    let synthB1 = createButton (" Keys " + synthNum);
    synthB1.style('font-size' , '30px');
    synthB1.style('background-color', silver);
    synthB1.style('color' , maroon);
    synthB1.position(synthBPosX, synthBPosY);
    synthB1.mousePressed(setSynthKey1);
    synthNum++;
    synthBPosY += 50;

    let synthB2 = createButton (" Keys " + synthNum);
    synthB2.style('font-size' , '30px');
    synthB2.style('background-color', silver);
    synthB2.style('color' , maroon);
    synthB2.position(synthBPosX, synthBPosY);
    synthB2.mousePressed(setSynthKey2);
    synthNum++;
    synthBPosY += 50;

    let synthB3 = createButton (" Keys " + synthNum);
    synthB3.style('font-size' , '30px');
    synthB3.style('background-color', silver);
    synthB3.style('color' , maroon);
    synthB3.position(synthBPosX, synthBPosY);
    synthB3.mousePressed(setSynthKey3);
    synthNum = 1;
}

function prompt () {
  let dialogue = 'Select a drum track and keyboard (default is 1) Have fun!';
  fill(50);
  textSize(16);
  textFont('Georgia');
  text(dialogue, 10, 10, 150, 150);
}

function drawTitle () {
  let title = 'MusicMaker';
  textSize(36);
  textFont('Helvetica');
  text(title, 400, 10, 150, 150);
}

function drawKeyboard () {
  fill(50);
  for(var i = 0; i < 14; i++) {
    rect(keyX, keyY, keyWidth, keyHeight)
    keyX += keyWidth;
  }
  //Reset for redraw
  keyX = 150;
}

function drawLoops () {
  fill(100);
  for(var i =0; i < 3; i++) {
    rect(loopX, loopY, loopWidth, loopHeight)
    loopX += loopWidth + 20;
  }
  loopX = 300;
}

// Need to use Node.js to test the audio.
// These functions will probably be consolidated into a switch-based function.

function playTrack1 () {
  console.log("I'll play track 1!");
  //play.track1();
}

function playTrack2 () {
  console.log("I'll play track 2!");
  //play.track2();
}

function playTrack3 () {
  console.log("I'll play track 3!");
  //play.track3();
}

function playTrack4 () {
  console.log("I'll play track 4!");
  //play.track4();
}

function playTrack5 () {
  console.log("I'll play track 5!");
  //play.track5();
}

function setSynthKey1 () {
  console.log("I'll set the keys to synth 1!")
}

function setSynthKey2 () {
  console.log("I'll set the keys to synth 2!")
}

function setSynthKey3 () {
  console.log("I'll set the keys to synth 3!")
}
