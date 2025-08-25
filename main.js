function createSudokuBoard(initialBoard = null) {
  let gameBoard = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0], // Row 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 8
  ];

  const boardElement = document.querySelector(".sudoku-board");
  boardElement.innerHTML = "";

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;

      // If we have initial board data, populate it
      //   if (initialBoard && initialBoard[row][col] !== 0) {
      //     cell.textContent = initialBoard[row][col];
      //     cell.classList.add("given"); // Mark as pre-filled
      //   }

      cell.addEventListener("click", () => selectCell(row, col));
      boardElement.appendChild(cell);
    }
  }
}


let currentlySelected = null; // Will store {row: 0, col: 0}

function selectCell(row, col) {
  console.log(`Clicked cell at row ${row}, col ${col}`);

  // Store the selected cell
  currentlySelected = { row: row, col: col };

  // Remove previous selection
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("selected");
  });

  // Add selection to clicked cell
  const clickedCell = document.querySelector(
    `[data-row="${row}"][data-col="${col}"]`
  );
  clickedCell.classList.add("selected");
}


document.addEventListener("DOMContentLoaded", function () {
  createSudokuBoard();
  // Other initialization code...
});
