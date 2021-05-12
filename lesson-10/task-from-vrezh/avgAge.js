const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function averageAge(arr) {
  let countForDivision = 0;
  let ageSum = 0;
  return arr.reduce(function (acc, element) {
    countForDivision++;
    ageSum += element.age;
    return  ageSum / countForDivision;
  }, 0);
}

console.log(averageAge(users));
