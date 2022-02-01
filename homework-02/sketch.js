/*                   Design Layout (ignore)


  --------------------- Setup------------------------------
  -Create Canvas
  -List buttons with function


  ----------------------Draw-------------------------------
  -canvas
  -"Prompt"
  -Keyboard


  -------------------functions--------------------------
  -Return to menu button
  -Create tracklist buttons
  -Create Synthlist buttons
  -Prompt funciton
  -Play Audio functions


   ----------------- Button List-------------------------
    5 Tracks in bottom left
    3 Synth Boards
    14 Keys
    Menu
  ---------------------------------------------------------

- --------------        TODO:       --------------------

  This code is still a monster. It's a stack of repeated functions.
  I originally set it up with for loops, but I felt like I couldn't access
  the buttons as readily or reliably. I'm sure it can be done, I just need to
  get this all out there and optimize later (hopefully).

  The Keyboard and Loop Buttons (tentative) still need functionality.

  I need to make an asset folder with sounds for audio functionality.

  If the loop buttons work, the synths will become bass, mid, and high. The
  keyboard will be simplified into 7 keys. The loop functionality is a big
  conditional for the layout of this design.

  I need to look into making an audio visualizer. Feels far beyond the scope
  at the moment. Might never happen.

*/

let trackNum = 1;
let synthNum = 1;
let tutNum = 0;

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

function setup() {
  createCanvas(1000, 500);

  homeButton();
  trackButtonList();
  synthButtonList();

/*
  //5 Preloaded drum tracks
  loadTracks();

  //3 Synth Key Sets
  loadSynth1();
  loadSynth2();
  loadSynth3();
*/

}

function draw() {
  background(220);
  prompt();
  drawKeyboard();
  drawLoops();
}

function homeButton() {
  let silver = color(153, 153, 153);
  let maroon = color(102, 0, 51);

  home = createButton(" Return to Menu");
  home.style('font-size', '22px');
  home.style('background-color', silver);
  home.style('color' , maroon);
  home.position(835, 10);
  home.mousePressed(returnToMenu);
}

function returnToMenu () {
  console.log("I'll go home now.");
}

function trackButtonList () {

  /*Button Creation from p5 documentation.
    Surely there is a better way to set this up - a custom button function
    The first button is explained; 5 buttons are made.
  */

    //Set Color
    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);

    //Create button and label
    let trackB1 = createButton (" Track " + trackNum);
    //Stylize
    trackB1.style('font-size' , '30px');
    trackB1.style('background-color', silver);
    trackB1.style('color' , maroon);
    //Set Position
    trackB1.position(trackBPosX, trackBPosY);

    // Still need to figure out this function (See function list below)
    trackB1.mousePressed(playTrack1);

    //Increment variables
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

  //Same functionality as the tracklist buttons
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
  let dialogue = 'Select a drum track and keyboard (default is 1.) Have fun!';
  fill(50);
  textSize(16);
  text(dialogue, 10, 10, 150, 150);
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

/* Need Sound Samples. If this many sound files exceeds storage limits,
  I could use various oscillators for the synths (eg sine, triangle.)

function loadTracks () {
  track1 = loadSound(~track to be determined.mp3~)
  track2 = loadSound(~track to be determined.mp3~)
  track3 = loadSound(~track to be determined.mp3~)
  track4 = loadSound(~track to be determined.mp3~)
  track5 = loadSound(~track to be determined.mp3~)
}

function loadSynth1 () {
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
}

function loadSynth2 () {
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
}

function loadSynth3 () {
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

// These audio functions still need to be created. The buttons work for now.
// These functions will probably be consolidated into a switch-based function.

function playTrack1 () {
  console.log("I'll play track 1!");
  //play.track1();
}

function playTrack2 () {
  console.log("I'll play track 2!");
}

function playTrack3 () {
  console.log("I'll play track 3!");
}

function playTrack4 () {
  console.log("I'll play track 4!");
}

function playTrack5 () {
  console.log("I'll play track 5!");
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
