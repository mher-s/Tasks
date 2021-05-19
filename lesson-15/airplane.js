let airplane = {
  name: "Valodik",
  isFlaying: true,
  isLand: function land() {
    airplane.isFlaying = false;
  },
  takeOff: function takeOff() {
    airplane.isFlaying = true;
  },
};

console.log(airplane.isFlaying);
airplane.isLand();
console.log(airplane.isFlaying);
airplane.takeOff();
console.log(airplane.isFlaying);
