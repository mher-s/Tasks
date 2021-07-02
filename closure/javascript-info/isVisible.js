let x = 1;

function func() {
  console.log(x); // cant see x

  let x = 2;
}

func();