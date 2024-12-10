let gameBoard = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let boxes = document.querySelectorAll(".box");
  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      if (player_x.isDrawing) {
        box.textContent = player_x.symbol;
      } else {
        box.textContent = player_o.symbol;
      }
    });
  });
  let row1 = [board[0], board[1], board[2]];
  let row2 = [board[3], board[4], board[5]];
  let row3 = [board[6], board[7], board[8]];
  let column1 = [board[0], board[3], board[6]];
  let column2 = [board[1], board[4], board[7]];
  let column3 = [board[2], board[5], board[8]];
  let cross1 = [board[0], board[4], board[8]];
  let cross2 = [board[2], board[4], board[6]];
})();

function createPlayer(symbol, isDrawing) {
  return {
    symbol,
    isDrawing,
  };
}

const player_x = createPlayer("x", true);
const player_o = createPlayer("o", false);
console.log(player_x);
console.log(player_o);
