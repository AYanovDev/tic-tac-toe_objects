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
      checkForWins(row1);
      checkForWins(row2);
      checkForWins(row3);
      checkForWins(column1);
      checkForWins(column2);
      checkForWins(column3);
      checkForWins(cross1);
      checkForWins(cross2);
      checkForDraw();
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
  let field = Array.from(boxes);

  let resultsDefined = false;

  function checkForWins(arrOfBoxes) {
    let content = arrOfBoxes.map((box) => box.textContent);
    let winner_x = content.every((i) => i === "x");
    let winner_o = content.every((i) => i === "o");
    if (winner_x) {
      resultsDefined = true;
      setTimeout(() => alert("Player X won!"), 100);
    }
    if (winner_o) {
      resultsDefined = true;
      setTimeout(() => alert("Player o won!"), 100);
    }
  }

  function checkForDraw() {
    let inBoxes = field.map((box) => box.textContent);
    if (inBoxes.every((i) => i !== "") && !resultsDefined) {
      setTimeout(() => alert("It's a draw!"), 100);
    }
  }
})();

function createPlayer(symbol, isDrawing) {
  return {
    symbol,
    isDrawing,
  };
}

const player_x = createPlayer("x", true);
const player_o = createPlayer("o", false);
