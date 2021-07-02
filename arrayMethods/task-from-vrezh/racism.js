const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(users) {
  return users.filter(function (users) {
    if (users.lang !== "ru") {
      return users;
    }
  });
}

console.log(filterUsers(users));
