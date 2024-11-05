console.log("game script is connected")
//Grabbing html selectors
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn ");
//Win coonditions
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPLayer = "X";
let running = false;
//This starts the game
initializeGame();


function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("clcik", restartGame)
    statusText.textContent = `${currentPLayer} 's turn`;
    running = true;
}

// Checks if the clicked cell has a value
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {

        return;

    }

    updateCell(this, cellIndex);
    checkWinner();

}

//Updates the cell 
function updateCell(cell, index) {
    options[index] = currentPLayer;
    cell.textContent = currentPLayer;

}

//Change the player lets you know who turn it is
function changePlayer() {
    currentPLayer = (currentPLayer == "X") ? "O" : "X";

    statusText.textContent = `${currentPLayer} 's turn`;

}

//Checks if the game is still going 
function checkWinner() {

    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {

            continue;

        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;


        }

    }
    if (roundWon) {
        statusText.textContent = `${changePlayer} wins!`;
        running = false;

    }
    else if (!options.includes("")) {

        statusText.textContent = `Draw!`;
        running = false;
    }
    else {
        changePlayer();

    }

}

//Restarts the game
function restartGame() {
    changePlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPLayer} 's turn`
    cells.forEach(cell => cell.textContent = "");
    running = true;


}
