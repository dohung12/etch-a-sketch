// DECLARE VARABLES
const divMatrix = 16;
const tileMatrix = document.querySelector(".tile-matrix");

//EVENT LISTENER
document.addEventListener("DOMContentLoaded", createDivMatrix);
// FUNCTIONS
function createDivMatrix() {
  for (let i = 0; i < divMatrix; i++) {
    let tileContainer = createDiv("tile-container");
    for (let j = 0; j < divMatrix; j++) {
      let tile = createDiv("tile");
      tileContainer.appendChild(tile);
    }
    tileMatrix.appendChild(tileContainer);
  }
}

// make a div
function createDiv(className) {
  let div = document.createElement("div");
  div.classList.add(className);
  return div;
}
