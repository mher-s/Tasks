function sortBooks(array) {
  array.sort((a, b) => a.percent - b.percent)
  
  let statusTrueBooksArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].readStatus) {
      statusTrueBooksArr.push(array[i]);
    }
  }
  return statusTrueBooksArr;
}

console.log(
  sortBooks([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);
