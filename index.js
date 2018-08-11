function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius ** 2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

function Polygon (array) {
  Shape.call(this);
  this.sides = array


}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function () {
  var total = 0
  for (var i = 0; i < this.sides.length; i++) {
    total += this.sides[i].length
  }
  return total
}
Polygon.prototype.numberOfSides = function () {
  var count = 0
  for (var side in this.sides) {
    count++
  }
  return count
}

function Quadrilateral () {
  Polygon.call(this);

}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;
