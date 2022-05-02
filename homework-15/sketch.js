function setup() {
  let img = createImage(800, 600); // same as new p5.Image(800, 600);
  img.loadPixels();
  createCanvas(800, 600);
  background(0);

  function writeColor(image, x, y, red, green, blue, alpha)
  {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }

  // this function draws random squares within squares on the canvas
  function drawShapes(number1, number2) {
    let startX = floor(random(number1-10)) + 10;
    let startY = floor(random(number2-20)) + 20;
    console.log(startX);
    // draw shapes
    for (x = startX; x < startX + 70; x++) {
      let num = Math.floor(Math.random() * 3);
      for (y = startY; y < startY + 70; y++) {
        if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
          writeColor(img, x, y, 50, 100, 50, floor(random(255)));
        } else {
          if (num == 2) {
            let red = 11;
            let green = 143;
            let blue = 127;
            writeColor(img, x, y, red, green, blue, floor(random(255)));
          } else if (num == 1) {
            let red = 219;
            let green = 99;
            let blue = 212;
            writeColor(img, x, y, red, green, blue, floor(random(255)));
          } else {
            let red =219;
            let green = 188;
            let blue = 66;
            writeColor(img, x, y, red, green, blue, floor(random(255)));
          }
        }
      }
    }
  }

  let x, y;
  for (y = 0; y < img.height; y++) {
    let num = Math.floor(Math.random() * 3);
    for (x = 0; x < img.width; x++) {

      let alpha = 255;

        if (num == 2) {
          let red = 11;
          let green = 143;
          let blue = 127;
          writeColor(img, x, y, red, green, blue, alpha);
        } else if (num == 1) {
          let red = 219;
          let green = 99;
          let blue = 212;
          writeColor(img, x, y, red, green, blue, alpha);
        } else {
          let red =219;
          let green = 188;
          let blue = 66;
          writeColor(img, x, y, red, green, blue, alpha);
        }
    }
  }

  // draw upper border line
  for(y = 0; y < 5; y++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 87, 219,204, 255);
    }
  }

  // draw a bottom border line
  y = img.height - 1;
  for(let i = 0; i < 5; i++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 87, 219, 204, 255);
    }
    y--;
  }

  // draw upper border line
  for(x = 0; x < 5; x++)
  {
    for (y = 0; y < img.height; y++)
    {
      writeColor(img, x, y, 87, 219,204, 255);
    }
  }

  // draw a bottom border line
  x = img.width - 1;
  for(let i = 0; i < 5; i++)
  {
    for (y = 0; y < img.height; y++)
    {
      writeColor(img, x, y, 87, 219, 204, 255);
    }
    x--;
  }


// Blocking out Initials
  for (x=670; x <710; x++){
    for (y=550; y <560; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }
  for (x=685; x <695; x++){
    for (y=560; y <585; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }
// The 'M' became too confusing so I just hardcoded it
  //Left Leg
  for (x=720; x <730; x++){
    for (y=550; y <585; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }
  //Right Leg
  for (x=750; x <760; x++){
    for (y=550; y <585; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  //left slant (2 squares)
  for (x=730; x <735; x++){
    for (y=550; y <=555; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  for (x=735; x <740; x++){
    for (y=555; y <=560; y++) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }
  //Right slant (2 squares)
  for (x=740; x <745; x++){
    for (y=560; y >=555; y--) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  for (x=745; x <750; x++){
    for (y=555; y >=550; y--) {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  // draw shapes
  for (var i = 0; i < 50; i++) {
    drawShapes(floor(random(width)), floor(random(height)));
  }

  img.updatePixels();
  image(img, 0, 0);
}
