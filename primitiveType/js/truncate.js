function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + "...";
}
console.log(truncate('xaxaxaxaxaxaxaxaxaxaxaxaxa', 10));
