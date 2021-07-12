// // // let animal = {
// // //   jumps: null,
// // // };
// // // let rabbit = {
// // //   __proto__: animal,
// // //   jumps: true,
// // // };

// // // alert(rabbit.jumps); // true (1)
// // // delete rabbit.jumps;

// // // alert(rabbit.jumps); // null (2)
// // // delete animal.jumps;

// // // alert(rabbit.jumps); // undefined (3)

// // let head = {
// //   glasses: 1,
// // };

// // let table = {
// //   pen: 3,
// //   __proto__: head,
// // };

// // let bed = {
// //   sheet: 1,
// //   pillow: 2,
// //   __proto__: table,
// // };

// // let pockets = {
// //   money: 2000,
// //   __proto__: bed,
// // };

// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// // answer rabbit

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

// both hamster inherit from hamster and stomach cant be same for both hamsters