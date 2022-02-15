class ninja {

    constructor(x, y, path) {
        this.x = x;
        this.y = y;
        this.path = path;
    }

    getImage() {
      var img = loadImage(this.path);
      return img;
    }

    getX() {
      return this.x;
    }

    getY() {
      return this.y;
    }
}
