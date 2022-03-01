/*
- --------------        TODO:       --------------------

Backtracks working. Their Buttons need a visual indicator.

Visualizer sort of working.

Loop button set aside for now

tentative class for 'Key' buttons has been made. Synth buttons will change key set.
Keys may end up running on one giant if statement for the mousePressed function :(

Failed to create a decent for loop to handle JS buttons. Couldn't add the mousePressed
function for each one - received error 't.call is not a function.'

*/

let trackNum = 1;
let synthNum = 1;
let vol = 0.1;
let fft;
let amp;

/*Not in use
let tutNum = 0;
let timerValue = 1;
let logo;
let logoX = 300;
let logoY = 10;
*/

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

/*Variables used for function trackBtns() - doesn't work
let tracks = [];
let trackB;
let trackFunct;
*/

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
keyY = 250;
keyWidth = 50;
keyHeight = 200;

/* Removed for now
//Loop Button positions and dimensions
loopX = 300;
loopY = 350;
loopWidth = 125;
loopHeight = 125;
*/

function preload() {

  track1 = loadSound('./audio/dontaskalexSlow.mp3');
  track2 = loadSound('./audio/newHighwaysEightiesInstrumental.mp3');
  track3 = loadSound('./audio/newHighwaysNuTranceKit.mp3');
  track4 = loadSound('./audio/dontaskalexSlow.mp3');
  track5 = loadSound('./audio/newHighwaysNuTranceKit.mp3');

  //trackFunct = loadStrings("trackFunct.txt");
}
/*
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
  outputVolume(vol);

  //Draw Menu button (top right)
  homeButton();

  //Draw Track and synth buttons; assign mousePressed functions
  trackButtonList();
  //trackBtns();
  synthButtonList();

  setViz();

  //setInterval(timeIt, 1000);
  //console.log(track1);

}

function draw() {
  background(220);
  //Draw Prompt (left corner)
  prompt();

  //Draw title (center)
  drawTitle();

  //Draw keyboard (nonfunctional)
  drawKeyboard();
  drawViz();

  /*No use - Removed for now
  //Draw Loop buttons
  drawLoops();

  //Beat Counter
  if (timerValue <= 4) {
    text(timerValue, 50, 150);
  }
  if (timerValue > 4 ) {
    timerValue = 1;
    text(timerValue, 50, 1500);
  }
*/

}




/*
function timeIt() {
  if (timerValue < 5) {
    timerValue++;
  }
}
*/

function homeButton() {

  //Set colors
  let silver = color(153, 153, 153);
  let maroon = color(102, 0, 51);

  //Create and stylize button
  home = createButton("Return to Menu");
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

/*  Doesn't work :(
function trackBtns() {
  for(var i = 1; i <= 5; i++) {
    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);
    tracks[i] = createButton (" Track " + i);
    tracks[i].style('font-size' , '30px');
    tracks[i].style('background-color', silver);
    tracks[i].style('color' , maroon);
    tracks[i].position(trackBPosX, trackBPosY);
    tracks[i].mousePressed(trackFunct[i]);
    trackBPosY += 50;

  }
}
*/

// ------------- Visualizer adapted from P5.Sound library----------------------------------------

function setViz() {
  fft = new p5.FFT();
  amp = new p5.Amplitude();
}

function drawViz() {

  let spectrum = fft.analyze();
  noStroke();
  //fill(0,360,360);
  for (let i = 0; i< spectrum.length; i++){

    var col = Math.abs(50 + i*.08) ;
    fill(col,col+100,col+150);
    let x = map(i, 0, spectrum.length/2, 200, 500);
    let h = -height + map(spectrum[i], 0, 900, height, 0);
    rect(x, 200, 5, h )
  }

  let waveform = fft.waveform();
  noFill();
  for (let i = 0; i < waveform.length; i++){
    //col = Math.abs(500 - map(i, 0, waveform.length, 0, 360)) - 200
		//stroke(col, 360, 360);
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
}
//-------------------------------------------------------------------------------------------------

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

/*
function drawLoops () {
  fill(100);
  for(var i =0; i < 3; i++) {
    rect(loopX, loopY, loopWidth, loopHeight)
    loopX += loopWidth + 20;
  }
  loopX = 300;
}
*/

//----------------------------------Functionality added to track buttons----------------------------------------
function playTrack1 () {
  console.log("I'll play track 1!");
  if(track1.isLooping()) {
    track1.stop();
  } else {
      track1.loop();
  }
}

function playTrack2 () {
  console.log("I'll play track 2!");
  if(track2.isLooping()) {
    track2.stop();
  } else {
      track2.loop();
  }
}

function playTrack3 () {
  console.log("I'll play track 3!");
  if(track3.isLooping()) {
    track3.stop();
  } else {
      track3.loop();
  }
}

function playTrack4 () {
  console.log("I'll play track 4!");
  if(track4.isLooping()) {
    track4.stop();
  } else {
      track4.loop();
  }
}

function playTrack5 () {
  console.log("I'll play track 5!");
  if(track5.isLooping()) {
    track5.stop();
  } else {
      track5.loop();
  }
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
