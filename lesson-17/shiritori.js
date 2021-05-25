class Shiritori {
  constructor() {
    this.gameOver = false;
    this.allWord = [];
    this.lastWord = "";
    this.score = 0;
  }
  game(word) {
    if (
      this.allWord.length === 0 ||
      word.slice(-1) === this.lastWord.charAt(0)
    ) {
      this.allWord.push(word);
      this.lastWord = word;
      this.score += 1;
      return this.allWord;
    } else {
      return `Game over :: Your score is ${this.score}`;
    }
  }
  restart() {
    this.gameOver = false;
    this.allWord = [];
    this.lastWord = "";
    this.score = 0;
    return "The game is restarted";
  }
}
let esim = new Shiritori();

console.log(esim.game("esim"));
console.log(esim.game("mise"));
