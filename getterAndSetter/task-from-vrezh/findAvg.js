function getBestStudent(obj) {
  let highestStudentAvg = 0;
  let highestAvgName;
  for (let key in obj) {
    let grade = obj[key].reduce(function (acc, element) {
      return (acc += element);
    }, 0);
    if (highestStudentAvg < grade / obj[key].length) {
      highestStudentAvg = grade;
      highestAvgName = key;
    }
  }
  return { highestAvgName, highestStudentAvg };
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
