const size = 5;

function generateBoard(board) {
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i][j] = "";
    }
  }
  return board;
}

let board = generateBoard([]);

function generateBombs(size) {
  i = Math.floor(Math.random() * size);
  j = Math.floor(Math.random() * size);
  return { i, j };
}

function generateSteps(size) {
  firstIndex = Math.floor(Math.random() * size);
  secondIndex = Math.floor(Math.random() * size);
  return { firstIndex, secondIndex };
}

const step = generateSteps(size);
const bomb = generateBombs(size);

function checkLose(board) {
  if (step.firstIndex === bomb.i && step.secondIndex === bomb.j) {
    return "You Lose";
  } else {
    //  need return updated board
  }
}
