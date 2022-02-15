var ninjaChar = [];
var ninjaAnim = [];
let object;

let i = 0;

function preload() {
  object = new ninja(0,0, 'images/Run__000.png');
  ninjaChar[0] = object;
  object = new ninja(0,0, 'images/Run__001.png');
  ninjaChar[1] = object;
  object = new ninja(0,0, 'images/Run__002.png');
  ninjaChar[2] = object;
  object = new ninja(0,0, 'images/Run__003.png');
  ninjaChar[3] = object;
  object = new ninja(0,0, 'images/Run__004.png');
  ninjaChar[4] = object;
  object = new ninja(0,0, 'images/Run__005.png');
  ninjaChar[5] = object;
  object = new ninja(0,0, 'images/Run__006.png');
  ninjaChar[6] = object;
  object = new ninja(0,0, 'images/Run__007.png');
  ninjaChar[7] = object;
  object = new ninja(0,0, 'images/Run__008.png');
  ninjaChar[8] = object;
  object = new ninja(0,0, 'images/Run__009.png');
  ninjaChar[9] = object;

  for(var i = 0; i < ninjaChar.length; i++) {
    ninjaAnim[i] = ninjaChar[i].getImage();
  }

}

function setup() {
    createCanvas(800,600);
    setInterval(incrementIndex, 50);
}

function draw()
{
    background(120);
      image(ninjaAnim[i], ninjaChar[i].getX(), ninjaChar[i].getY());
}

function incrementIndex()
{
     i += 1;
     if (i >= ninjaAnim.length) {
         i = 0;
     }
}
