const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterUsersByField(users) {
  return users.filter(function (users) {
    if (users.isAstronaut === true) {
      return users;
    }
  });
}

console.log(filterUsersByField(users));
