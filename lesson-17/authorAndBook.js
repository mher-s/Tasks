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
    if (this.gender === "male") {
      return `Mr. ${this._name}`;
    }
    return `Ms. ${this._name}`;
  }
}

const author = new Author("Valodik", "valodik228@gmail.com", "male");

console.log(author.name);
console.log(author.name = 'asqanaz');
