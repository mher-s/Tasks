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

function returnUsername(users) {
  return users.map(function (items) {
    return items.username;
  });
}

console.log(returnUsername(users));
