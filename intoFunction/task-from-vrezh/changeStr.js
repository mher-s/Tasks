function deleteStr(sentence, str) {
  while (sentence.includes(str)) {
    sentence = sentence.replace(str, "");
  }
  return sentence;
}

console.log(deleteStr('alax is akbar', 'is'));
