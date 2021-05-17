const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(value) {
    obj._name = value
      .split(",")
      .map((element) => [element, element.length]);
  },
};

obj.name = "Vrezh, Artavazd";
console.log(obj.name);
