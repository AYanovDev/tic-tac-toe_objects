let gameBoard = (() => {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach(function (box) {
    function pickEvent() {
      if (player_x.isDrawing) {
        box.textContent = player_x.symbol;
        player_x.isDrawing = false;
        player_o.isDrawing = true;
      } else {
        box.textContent = player_o.symbol;
        player_o.isDrawing = false;
        player_x.isDrawing = true;
      }
      box.removeEventListener("click", pickEvent);
    }
    box.addEventListener("click", pickEvent);
  });
  let row1 = [boxes[0], boxes[1], boxes[2]];
  let row2 = [boxes[3], boxes[4], boxes[5]];
  let row3 = [boxes[6], boxes[7], boxes[8]];
  let column1 = [boxes[0], boxes[3], boxes[6]];
  let column2 = [boxes[1], boxes[4], boxes[7]];
  let column3 = [boxes[2], boxes[5], boxes[8]];
  let cross1 = [boxes[0], boxes[4], boxes[8]];
  let cross2 = [boxes[2], boxes[4], boxes[6]];
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
