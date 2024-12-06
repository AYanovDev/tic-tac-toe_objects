let gameBoard = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return {
    makeChoice(index, choice) {
      board[index] = choice;
    },
  };
})();
