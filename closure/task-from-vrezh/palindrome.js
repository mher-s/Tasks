function palindrome(str) {
  let checkPalindrome = str.split('').reverse().join('')
  if (str === checkPalindrome) {
      return "It is palindrome"
  } else{
      return "It is not a palindrome"
  }
}

console.log(palindrome("ASA"));
