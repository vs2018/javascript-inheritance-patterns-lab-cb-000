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

  this.position = {}


  Shape.prototype.addToPlane = function (x, y) {
    this.position = Point(x,y)
  }

  Shape.prototype.move = function (x,y) {
    this.position = Point(x,y)

  }
}
