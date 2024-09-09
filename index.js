const gridContainer = document.querySelector(".container-grid");
const btnEditSize = document.querySelector(".pixel-size");
const btnReset = document.querySelector(".btn-reset");

//function to start the game
function etchASketch() {
  let currentSize = 16;

  newGrid(currentSize);

  btnEditSize.addEventListener("click", () => {
    let userAns = prompt("How many number of squares? (max = 100 box)");

    if (userAns == null) {
      return;
    }

    if (userAns > 100) {
      alert("Enter number lower than 101");
      return;
    }
    currentSize = userAns;

    resetGrid();
    newGrid(userAns);
    startSketching();
  });

  btnReset.addEventListener("click", () => {
    resetGrid();
    newGrid(currentSize);
    startSketching();
  });

  startSketching();
}

//starting the game
etchASketch();

//function resetGrid by deleting all of the child nodes
function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function startSketching() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "aliceblue";
    });
  });
}

function createGrid(size) {
  resetGrid();

  for (let i = 1; i <= size; i++) {
    for (let k = 1; k <= size; k++) {
      const div = document.createElement("div");
      div.className = "square";
      gridContainer.appendChild(div);
    }
  }
}

function newGrid(size) {
  createGrid(size);
  adjustGridSize(size);
}

//changing the grid size based on user input
function adjustGridSize(size) {
  let newHeight = 495 / size;
  let newWidth = 495 / size;

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.height = newHeight.toString() + "px";
    square.style.width = newWidth.toString() + "px";
  });
}
