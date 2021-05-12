function myForEach(param, fn) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    fn(element);
  }
}

myForEach(["q", "w", "e", "r", "t", "y"], (a) => {
  console.log(a + "s");
});
