class Author {
  constructor(name, email, gender) {
    this._name = name;
    this.email = email;
    this.gender = gender;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof this._name !== "string") {
      throw new Error("Invalid Name");
    }
    value = this._name;
    return value;
  }
  toString() {
    if (this.gender.toLowerCase() === "male") {
      return `Mr. ${this._name}`;
    }
    return `Ms. ${this._name}`;
  }
}

const author = new Author("Valodik", "valodik228@gmail.com", "male");

// console.log(author.name);
// console.log((author.name = "asqanaz"));

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this.price = price;
    this.quantity = quantity;
  }
  get nameAndAuthor() {
    return `${this._author} :: ${this._title}`;
  }
  set nameAndAuthor(value) {
    if (typeof this._author !== "string") {
      throw new Error("Invalid input");
    }
    return (value =  this._author);
  }
  getProfit() {
    return this.price * this.quantity;
  }
  toString() {
    return `${this._author} :: ${this._title}`;
  }
}

const newBook = new Book("Jizn", "valodik", 2000, 100);

