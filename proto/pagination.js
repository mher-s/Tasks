let pages = [];
let currentPage = 0;
function toPages(str) {
  let currentStr = "";
  let arr = [];
  for (var i = 0; i < str.length; ++i) {
    currentStr += str[i];
    if (currentStr.length == 4) {
      arr.push(currentStr);
      currentStr = "";
    }
  }
  for (var i in arr) {
    pages.push(arr[i]);
  }
}
toPages("abcdefghijklmnopqrstuvwxyz");

function prevPage() {
  if (currentPage > 0) {
    currentPage -= 1;
  } else {
    return "U are on first page";
  }
  return currentPage;
}

function nextPage() {
  if (currentPage <= pages.length) {
    currentPage += 1;
  } else {
    return "U are on last page";
  }
  return currentPage;
}

function firstPage() {
  return (currentPage = 1);
}

function lastPage() {
  return (currentPage = pages.length);
}

function goToPage(toPage) {
  return (currentPage = toPage);
}

function getPageItems(whichPage) {
  currentPage = whichPage;
  return pages[currentPage];
}