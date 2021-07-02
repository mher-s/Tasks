function rewrite(a) {
  let i = 0;

  // for (i; i < a.length; i++) {
  //     console.log("for", i, a[i]);
  //   }
  //

  //   while (i < a.length) {
  //     console.log("for", i, a[i]);
  //     i++;
  //   }

  do {
    console.log("for", i, a[i]);
    i++;
  } while (i < a.length);
}

rewrite([2, 4, 8, 9, 10]);
