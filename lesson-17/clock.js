class Clock {
  constructor({ template }) {
    this.template = template;
  }

  clock() {
    let date = new Date();

    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    let minute = date.getMinutes();
    if (minute < 10) minute = "0" + minute;

    let second = date.getSeconds();
    if (second < 10) second = "0" + second;

    let output = this.template
      .replace("h", hour)
      .replace("m", minute)
      .replace("s", second);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.clock();
    this.timer = setInterval(() => this.clock(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
