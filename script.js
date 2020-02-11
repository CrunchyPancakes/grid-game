const gridSize = document.getElementById("size-input").value;
const drawButton = document.getElementById("draw-btn");
const gameGrid = document.getElementById("game-grid");
const palette = document.getElementById("palette");

let selectedOption;

var i;
var j;

// Draws out the grid
function drawGrid(size) {
  gameGrid.innerHTML = "";
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      gameGrid.innerHTML += '<div class="square"></div>';
      // Check loop is working
      console.log(`${i}, ${j}`);
    }
  }
  gameGrid.style.gridTemplateColumns = `repeat(${size}, auto)`;
}

// Event listeners
drawButton.addEventListener("click", () => {
  drawGrid(gridSize);
});

palette.addEventListener("click", e => {
  if (e.target.classList.contains("square")) {
    // First, unselect all options
    const options = palette.querySelectorAll(".square");
    options.forEach(option => option.classList.remove("selected"));
    // Then select the target option
    e.target.classList.toggle("selected");
    selectedOption = e.target.classList;
  }
});

gameGrid.addEventListener("click", e => {
  if (e.target.classList.contains("square") && selectedOption != null) {
    e.target.classList = selectedOption;
    // Since we do not want the grid squares to be highlighed
    e.target.classList.remove("selected");
  }
});

// Initial function calls
drawGrid(gridSize);
