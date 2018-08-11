function Point (x, y) {
  this.x = x
  this.y = y

  Point.prototype.toString = function () {
    return "(" + x + ", " + y + ")"


  }
}
