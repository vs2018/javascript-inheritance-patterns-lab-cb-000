function Point (x, y) {
  this.x = x
  this.y = y

  Point.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")"


  }
}

function Side (length) {
  this.length = length
}

function Shape () {


  Shape.prototype.addToPlane = function () {
    
  }
}
