  function sum(arr) {
    function inner(iArr, acc) {
      if (iArr.length === 0) {
        return acc;
      }
      const [head, ...tail] = iArr;

      return inner(tail, acc + head);
    }
    return inner(arr, 0);
  }

  console.log(sum([1, 2, 3, 4]));
