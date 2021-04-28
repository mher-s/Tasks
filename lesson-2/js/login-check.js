const realLogin = "admin";
let userAskForLogin = prompt("Enter login: ");

if (userAskForLogin === realLogin) {
  const password = "AxalayMaxalay";
  let userAskForPass = prompt("Enter Password: ");
  if (userAskForPass === password) {
    alert("Welcome");
  } else if (userAskForPass === null) {
    alert("Canceled");
  } else {
    alert("Bye-bye fake pass");
  }
} else if (userAskForLogin === null) {
  alert("Canceled");
} else {
  alert("Bye-bye fake login");
}
