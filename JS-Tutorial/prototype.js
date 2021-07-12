// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // true (1)
// delete rabbit.jumps;

// alert(rabbit.jumps); // null (2)
// delete animal.jumps;

// alert(rabbit.jumps); // undefined (3)

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
