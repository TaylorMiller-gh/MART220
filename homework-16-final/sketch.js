/*
- --------------        TODO:       --------------------

RIP loop buttons

*/

let trackNum = 1;
let synthNum = 1;
let vol = 0.1;
let fft;
let amp;
let keyNum = 0;
var notes = [ 60, 62, 64, 65, 67, 69, 71];

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
let synthBPosX = 1055;
let synthBPosY = 320;

//return to Menu button
let home;

//Keyboard positions and dimensions
keyX = 300;
keyY = 250;
let gap = 10;
keyWidth = 70;
keyHeight = 270;

// Loop button specs
loopX = 300;
loopY = 670;
//loopWidth = 125;
//loopHeight = 125;


function preload() {

  track1 = loadSound('./audio/dontaskalexSlow.mp3');
  track2 = loadSound('./audio/newHighwaysEightiesInstrumental.mp3');
  track3 = loadSound('./audio/newHighwaysNuTranceKit.mp3');
  track4 = loadSound('./audio/funk.mp3');
  track5 = loadSound('./audio/infraction.mp3');

}


function setup() {
  createCanvas(1200, 700);
  outputVolume(vol);

  //Draw Menu button (top right)
  homeButton();

  //Draw Track and synth buttons; assign mousePressed functions
  trackButtonList();

  //trackBtns();
  synthButtonList();

  //slider(); -- removed

  //Visualizer
  setViz();

  osc1 = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('sawtooth');
  osc3 = new p5.Oscillator('square');

  osc1.start();
  osc1.amp(0);

  osc2.start();
  osc2.amp(0);

  osc3.start();
  osc3.amp(0);


}

function draw() {
  background(200);

  //Draw Prompt (left corner)
  prompt();

  //Draw title (center)
  drawTitle();

  //setVol(); --removed

  //Draw keyboard
  drawKeyboard();

  //Draw Visualizer
  drawViz();

  //Draw imaginary Loop buttons
  drawLoops();

}

// ------------------------------ Keyboard Functions ---------------------------

function playNote(note, duration) {
  // Check which oscillator is selected and play note
  if (keyNum == 0) {
      osc1.freq(midiToFreq(note));
      osc1.fade(0.5,0.2);
      //console.log('yup');
      if (duration) {
        setTimeout(function() {
          osc1.fade(0,0.2);
        }, duration-50);
      }
  }  else if (keyNum == 1) {
          osc2.freq(midiToFreq(note));
          osc2.fade(0.5,0.2);

          if (duration) {
            setTimeout(function() {
              osc2.fade(0,0.2);
            }, duration-50);
          }
      }
      else if (keyNum == 2) {
          osc3.freq(midiToFreq(note));
          osc3.fade(0.5,0.2);

          if (duration) {
            setTimeout(function() {
              osc3.fade(0,0.2);
            }, duration-50);
          }
    }

}

function mousePressed() {

  //Unfortunately, I had to settle for the massive 'if' statement. Oh well.

  // Map mouse to the key index and play note
  if (mouseX > keyX && mouseX < keyX + keyWidth && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[0]);
  } else if (mouseX > keyX + keyWidth + gap && mouseX < keyX + 2*keyWidth + gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[1]);
  } else if (mouseX > keyX + 2*keyWidth + 2*gap && mouseX < keyX + 3*keyWidth + 2*gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[2]);
  } else if (mouseX > keyX + 3*keyWidth + 3*gap && mouseX < keyX + 4*keyWidth + 3*gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[3]);
  } else if (mouseX > keyX + 4*keyWidth + 4*gap && mouseX < keyX + 5*keyWidth + 4*gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[4]);
  } else if (mouseX > keyX + 5*keyWidth + 5*gap && mouseX < keyX + 6*keyWidth + 5*gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[5]);
  } else if (mouseX > keyX + 6*keyWidth + 6*gap && mouseX < keyX + 7*keyWidth + 6*gap && mouseY > keyY && mouseY < keyY + keyHeight) {
    playNote(notes[6]);
  }
}

function mouseReleased() {
  if (keyNum==0) {
    osc1.fade(0,0.5);
  }
  else if (keyNum==1) {
    osc2.fade(0,0.5);
  }
  else if (keyNum==2) {
    osc3.fade(0,0.5);
  }
}

// --------------------------- Return to menu -----------------------------------

function homeButton() {

  //Set colors
  let silver = color(153, 153, 153);
  let maroon = color(102, 0, 51);

  //Create and stylize button
  home = createButton("Return to Menu");
  home.style('font-size', '36px');
  home.style('background-color', silver);
  home.style('color' , maroon);
  home.position(935, 10);

  //Functionality
  home.mousePressed(returnToMenu);
}


// Not sure what I was meant to put here for the wall project. I just left it in
function returnToMenu () {
  console.log("I'll go home now.");
}

// ------------------------ Volume (Not Used) --------------------------------
function slider() {
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(950, 100);
  slider.style('width', '200px');
}

function setVol() {

  var vol = amp.getLevel();
  let slider1_val = slider.value();
  song.setVolume(slider.value());
}


// ------------- Visualizer adapted from P5.Sound library---------------------------

function setViz() {
  fft = new p5.FFT();
  amp = new p5.Amplitude();
}

function drawViz() {

  let spectrum = fft.analyze();
  noStroke();
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
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
}

//---------------------------------Track Buttons-------------------------------

function trackButtonList () {

    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);
    let trackB1 = createButton (" Track " + trackNum);
    trackB1.style('font-size' , '36px');
    trackB1.style('background-color', silver);
    trackB1.style('color' , maroon);
    trackB1.position(trackBPosX, trackBPosY);
    trackB1.mousePressed(playTrack1);
    trackNum++;
    trackBPosY += 100;

    let trackB2 = createButton (" Track " + trackNum);
    trackB2.style('font-size' , '36px');
    trackB2.style('background-color', silver);
    trackB2.style('color' , maroon);
    trackB2.position(trackBPosX, trackBPosY);
    trackB2.mousePressed(playTrack2);
    trackNum++;
    trackBPosY += 100;

    let trackB3 = createButton (" Track " + trackNum);
    trackB3.style('font-size' , '36px');
    trackB3.style('background-color', silver);
    trackB3.style('color' , maroon);
    trackB3.position(trackBPosX, trackBPosY);
    trackB3.mousePressed(playTrack3);
    trackNum++;
    trackBPosY += 100;

    let trackB4 = createButton (" Track " + trackNum);
    trackB4.style('font-size' , '36px');
    trackB4.style('background-color', silver);
    trackB4.style('color' , maroon);
    trackB4.position(trackBPosX, trackBPosY);
    trackB4.mousePressed(playTrack4);
    trackNum++;
    trackBPosY += 100;

    let trackB5 = createButton (" Track " + trackNum);
    trackB5.style('font-size' , '36px');
    trackB5.style('background-color', silver);
    trackB5.style('color' , maroon);
    trackB5.position(trackBPosX, trackBPosY);
    trackB5.mousePressed(playTrack5);
    trackNum = 1;
}

/*  Shameful

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

//---------------------------- Oscillator Buttons ------------------------------

function synthButtonList () {

    let silver = color(153, 153, 153);
    let maroon = color(102, 0, 51);

    let synthB1 = createButton (" Sine ");
    synthB1.style('font-size' , '36px');
    synthB1.style('background-color', silver);
    synthB1.style('color' , maroon);
    synthB1.position(synthBPosX, synthBPosY);
    synthB1.mousePressed(setSynthKey1);
    synthNum++;
    synthBPosY += 100;
    //synthBPosX -= 30;

    let synthB2 = createButton (" Saw ");
    synthB2.style('font-size' , '36px');
    synthB2.style('background-color', silver);
    synthB2.style('color' , maroon);
    synthB2.position(synthBPosX, synthBPosY);
    synthB2.mousePressed(setSynthKey2);
    synthNum++;
    synthBPosY += 100;
    synthBPosX -= 20;

    let synthB3 = createButton (" Square ");
    synthB3.style('font-size' , '36px');
    synthB3.style('background-color', silver);
    synthB3.style('color' , maroon);
    synthB3.position(synthBPosX, synthBPosY);
    synthB3.mousePressed(setSynthKey3);
    synthNum = 1;
}

// --------------------- Words -------------------------------------------

function prompt () {
  let dialogue = 'Select a track/oscillator to turn it on or off. Have fun!';
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

// ---------------------------- Keyboard -------------------------------------

function drawKeyboard () {
  fill(50);
  for(var i = 0; i < 7; i++) {
    if (mouseX > keyX && mouseX < keyX + keyWidth && mouseY > keyY && mouseY < keyY + keyHeight) {
      if (mouseIsPressed) {
        fill(100,255,200);
      }
    } else {
      fill(50);
    }
    rect(keyX, keyY, keyWidth, keyHeight)
    keyX += keyWidth + gap;
  }
  keyX = 300;
}

// ------------------------ Broken Loops :) -----------------------------------

function drawLoops () {

  let dialogue = 'Here is where I would put loop buttons if I had any!';
  fill(50);
  textSize(16);
  textFont('Georgia');
  text(dialogue, loopX+100, loopY, 500, 60);
  /* I will make a loop button someday
  fill(100);
  for(var i =0; i < 3; i++) {
    rect(loopX, loopY, loopWidth, loopHeight)
    loopX += loopWidth + 20;
  }
  loopX = 300;
  */
}


//----------------------------------Track Functions----------------------------------------
function playTrack1 () {
  //console.log("I'll play track 1!");
  if(track1.isLooping()) {
    track1.stop();
  } else {
      track1.loop();
  }
}

function playTrack2 () {
  //console.log("I'll play track 2!");
  if(track2.isLooping()) {
    track2.stop();
  } else {
      track2.loop();
  }
}

function playTrack3 () {
  //console.log("I'll play track 3!");
  if(track3.isLooping()) {
    track3.stop();
  } else {
      track3.loop();
  }
}

function playTrack4 () {
  //console.log("I'll play track 4!");
  if(track4.isLooping()) {
    track4.stop();
  } else {
      track4.loop();
  }
}

function playTrack5 () {
  //console.log("I'll play track 5!");
  if(track5.isLooping()) {
    track5.stop();
  } else {
      track5.loop();
  }
}

//---------------------- Oscillator Key functions ------------------------
// I can hardly imagine a worse way to handle this, but I forgot the original plan

function setSynthKey1 () {
  //console.log("I'll set the keys to sine!")
  keyNum = 0;
}

function setSynthKey2 () {
  //console.log("I'll set the keys to saw!")
  keyNum = 1;
}

function setSynthKey3 () {
  //console.log("I'll set the keys to square!")
  keyNum = 2;
}
