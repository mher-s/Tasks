let result;
let a = 1,
  b = 3;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

a + b < 4 ? (result = "Мало") : (result = "Много");

console.log(result);

let message;

//////////////////////////////////////////////////////////

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

login == "Сотрудник"
  ? (message = "Привет")
  : login == "Директор"
  ? (message = "Здравствуйте" ? login == "" : (message = "Нет логина"))
  : (message = "");
