class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const firstCircle = new Circle(11);
console.log(firstCircle.getArea());
const secondCircle = new Circle(4.44);
console.log(secondCircle.getPerimeter());
