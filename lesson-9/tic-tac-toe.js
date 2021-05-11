const boardSize = 3;

function generateBoard(boardSize) {
  let board = [];
  let emptyPlace = " ";
  if (boardSize < 3) {
    alert(`Error board size can't be ${boardSize}`);
    return "Error";
  }
  for (let i = 0; i < boardSize; i++) {
    board.push(Array(boardSize).fill(emptyPlace));
  }
  return board;
}

let board = generateBoard(boardSize);

function move(firstIndex, secondIndex) {
  if (firstIndex <= boardSize || secondIndex <= boardSize) {
    return `index can't be smaller then ${boardSize} or equal to ${boardSize}`;
  }
  return { firstIndex, secondIndex };
}

function fillBoard(board) {
  while (board === "") {
      
  }
}

let players = {
  x: "X",
  o: "O",
};

let currentPlayer = players.x;

function checkDiagonals(board) {
  let diagonal = "";
  let reverseDiagonal = "";
}
