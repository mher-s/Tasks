function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
checkAge(17);

// Will work first of all he check "if statement" if its true he will return true, in any other sit will return confirm func
