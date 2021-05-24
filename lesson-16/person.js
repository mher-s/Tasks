function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function eat() {
    if (this.stomach.length === 10) {
      return `Stomach is full`;
    } else {
      this.stomach.push("food");
      return this.stomach
    }
  };
  this.poop = function poop() {
    this.stomach.pop("food");
  };
  this.greeting = function greeting() {
    return `hey my name is ${this.name}, I am ${this.age} y.o. what about u`;
  };

  this.getNameAndAge = function () {
    return `${this.name},${this.age}`;
  };
}

const p1 = new Person("Vzgo", 20);
console.log(p1.eat());
