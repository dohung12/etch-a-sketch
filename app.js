// DECLARE VARABLES
let matrixSize = 16;
const tilesMatrix = document.querySelector(".tile-matrix");
const resetBtn = document.querySelector(".reset-btn");
//EVENT LISTENER
document.addEventListener("DOMContentLoaded", createDivMatrix(16));

resetBtn.addEventListener("click", resetTilesMatrix);
// FUNCTIONS

function resetTilesMatrix(e) {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => (tile.style.backgroundColor = "lightblue"));
  matrixSize = parseInt(prompt("Enter board size (<100) : "));
  while (matrixSize > 100) {
    matrixSize = parseInt(prompt("Enter board size (<100): "));
  }
  tilesMatrix.innerHTML = "";
  createDivMatrix(matrixSize);
}

function createDivMatrix(matrixSize) {
  for (let i = 0; i < matrixSize; i++) {
    let tileContainer = createDiv("tile-container");
    for (let j = 0; j < matrixSize; j++) {
      let tile = createDiv("tile");
      tileContainer.appendChild(tile);
      tile.addEventListener("mouseover", hoverTile);
    }
    tilesMatrix.appendChild(tileContainer);
  }
}

function createDiv(className) {
  let div = document.createElement("div");
  div.classList.add(className);
  return div;
}

function hoverTile(e) {
  let bgColor = e.currentTarget.style.backgroundColor;
  if (bgColor === "") {
    e.currentTarget.style.backgroundColor = randomHSL();
    console.log(e.currentTarget.style.backgroundColor);
  }
}

function randomHSL() {
  function random(num) {
    return Math.floor(Math.random() * (num + 1));
  }
  return `hsl(${random(360)},${random(100)}%,${random(100)}%)`;
}
