body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: greenyellow;
}

#board {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  cursor: pointer;
  position: relative;
}

.tile {
  color: currentColor;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-border {
  border-right: 0.2em solid indigo;
}

.bottom-border {
  border-bottom: 0.2em solid indigo;
}

.strike {
  position: absolute;
  background-color: darkred;
}

.strike-row-1 {
  width: 100%;
  height: 4px;
  top: 15%;
}
.strike-row-2 {
  width: 100%;
  height: 4px;
  top: 48%;
}
.strike-row-3 {
  width: 100%;
  height: 4px;
  top: 83%;
}
.strike-column-1 {
  height: 100%;
  width: 4px;
  left: 15%;
}
.strike-column-2 {
  height: 100%;
  width: 4px;
  left: 48%;
}
.strike-column-3 {
  height: 100%;
  width: 4px;
  left: 83%;
}
.strike-diagonal-1 {
  width: 90%;
  height: 4px;
  top: 50%;
  left: 5%;
  transform: skewY(45deg);
}
.strike-diagonal-2 {
  width: 90%;
  height: 4px;
  top: 50%;
  left: 5%;
  transform: skewY(-45deg);
}

h1 {
  color: currentColor;
}

#game-over-area {
  text-align: center;
  border: indigo 8px solid;
  padding: 50px;
  width: 50%;
  margin-top: 50px;
}

h2 {
  color: currentColor;
  font-size: 2em;
  margin-top: 0px;
}

button {
  background-color: transparent;
  color: currentColor;
  border: currentColor 1px solid;
  padding: 10px;
  font-size: 1.5em;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}

.x-hover:hover::after {
  content: "X";
  opacity: 0.4;
}

.o-hover:hover::after {
  content: "O";
  opacity: 0.4;
}
 30 changes: 30 additions & 0 deletions30  
index.html
@@ -0,0 +1,30 @@
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link href="index.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Tic Tac Toe</h1>
    <div id="board">
      <div data-index="1" class="tile right-border bottom-border"></div>
      <div data-index="2" class="tile right-border bottom-border"></div>
      <div data-index="3" class="tile bottom-border"></div>
      <div data-index="4" class="tile right-border bottom-border"></div>
      <div data-index="5" class="tile right-border bottom-border"></div>
      <div data-index="6" class="tile bottom-border"></div>
      <div data-index="7" class="tile right-border"></div>
      <div data-index="8" class="tile right-border"></div>
      <div data-index="9" class="tile"></div>
      <div id="strike" class="strike"></div>
    </div>
    <div id="game-over-area" class="hidden">
      <h2 id="game-over-text">Winner is X</h2>
      <button id="play-again">Play Again</button>
    </div>
    <script src="index.js"></script>
  </body>
</html>
 124 changes: 124 additions & 0 deletions124  
index.js
@@ -0,0 +1,124 @@
const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

//Sounds
const gameOverSound = new Audio("sounds/game_over.wav");
const clickSound = new Audio("sounds/click.wav");

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function setHoverText() {
  //remove all hover text
  tiles.forEach((tile) => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}

setHoverText();

function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if (turn === PLAYER_X) {
    tile.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X;
    turn = PLAYER_O;
  } else {
    tile.innerText = PLAYER_O;
    boardState[tileNumber - 1] = PLAYER_O;
    turn = PLAYER_X;
  }

  //   clickSound.play();
  setHoverText();
  checkWinner();
}

function checkWinner() {
  //Check for a winner
  for (const winningCombination of winningCombinations) {
    //Object Destructuring
    const { combo, strikeClass } = winningCombination;
    const tileValue1 = boardState[combo[0] - 1];
    const tileValue2 = boardState[combo[1] - 1];
    const tileValue3 = boardState[combo[2] - 1];

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      strike.classList.add(strikeClass);
      gameOverScreen(tileValue1);
      return;
    }
  }

  //Check for a draw
  const allTileFilledIn = boardState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverScreen(null);
  }
}

function gameOverScreen(winnerText) {
  let text = "Draw!";
  if (winnerText != null) {
    text = `Winner is ${winnerText}!`;
  }
  gameOverArea.className = "visible";
  gameOverText.innerText = text;
  gameOverSound.play();
}

function startNewGame() {
  strike.className = "strike";
  gameOverArea.className = "hidden";
  boardState.fill(null);
  tiles.forEach((tile) => (tile.innerText = ""));
  turn = PLAYER_X;
  setHoverText();
}

const winningCombinations = [
  //rows
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" },
  //columns
  { combo: [1, 4, 7], strikeClass: "strike-column-1" },
  { combo: [2, 5, 8], strikeClass: "strike-column-2" },
  { combo: [3, 6, 9], strikeClass: "strike-column-3" },
  //diagonals
  { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
];