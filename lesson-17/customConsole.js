class CustomConsole {
  constructor() {
    this.history = [];
  }
  log(input) {
    this.history.push(input);
    return JSON.stringify(input); // its correct but console don't show if u need check just use ::: JSON.stringify(JSON.stringify(input))
  }
  showHistory() {
    return this.history;
  }
  clearHistory() {
    console.log("history deleted");
    return (this.history = []);
  }
}

const myConsole = new CustomConsole();

console.log(myConsole.log("dsds"));
console.log(myConsole.log("rgkege"));
console.log(myConsole.log("465we4f"));
console.log(myConsole.showHistory());
console.log(myConsole.clearHistory());
console.log(myConsole.log("465we4f"));
console.log(myConsole.showHistory());
