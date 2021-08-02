/*

MVP - Minimum Viable Product

1. Initialize the game
    - players
    - board display
    - board model
    - current player tracker
    - click handlers for each column
2. Take player input
    - know which player is dropping a disc
    - which column are we dropping into?
    - is that column already full?
    - drop the disc into the top of the column
3. Check for game end conditions
    - tie
    - win
    - announce that the game is over

*/

const boardModel = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ]
]
let currentPlayer = 1 // 1 or 2
let numberOfDiscsDropped = 0

const displayMessage = function (message) { // Stub
    // TODO: Clear out the message div, then add new message to div
    console.log(message)
}
const displayCurrentPlayer = function (playerNum) {
    displayMessage(`Current player: ${playerNum}`)
}
const displayTieMessage = function () {
    displayMessage("Tie game!")
}
const displayWinMessage = function () {
    // TODO: Change the following line to actually say who the winner is
    displayMessage("Winner is _____")    
}

const isColumnFull = function (colNum) {
    // TODO: Look at the boardModel to determine if col is full
    return false // or true
}

const dropDisc = function (colNum, colNode, playerNum) {
	let disc = document.createElement("div")
	if (playerNum === 1) {
		disc.classList.add("disc", "red")
	} else {
		disc.classList.add("disc", "black")
	}
	colNode.append(disc)
	boardModel[colNode.childElementCount - 1][colNum] = playerNum
    numberOfDiscsDropped++
}

const winnerVertical = function (model) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum] &&
                model[rowNum][colNum] !== null) {
                return true
            }
        }
    }
    return false
}
const winnerHorizontal = function (model) {
    // TODO: Following the example of the winnerVertical function, 
    //       see if there is a horizontal winner
    return false
}
const winnerDiagonalUp = function (model) {
    for (let rowNum = 3; rowNum < model.length; rowNum++) {
        for (let colNum = 0; colNum < 4; colNum++) {
            if (model[rowNum][colNum] === model[rowNum - 1][colNum + 1] &&
                model[rowNum][colNum] === model[rowNum - 2][colNum + 2] &&
                model[rowNum][colNum] === model[rowNum - 3][colNum + 3] &&
                model[rowNum][colNum] !== null) {
                return true
            }
        }
    }
    return false
}
const winnerDiagonalDown = function (model) {
    // TODO: Following the example of the winnerDiagonalUp function, 
    //       see if there is a diagonal down winner
    return false
}
const isATie = function (model) {
    // TODO: Determine if the board is full (numberOfDiscsDropped === 42)
    return false
}

const isGameOver = function (model) {
    // Check for a win
    if (winnerVertical(model) ||
        winnerHorizontal(model) ||
        winnerDiagonalUp(model) ||
        winnerDiagonalDown(model)) {
        return "win"
    }
        
    // Check for a tie
    if (isATie(model)) {
        return "tie"
    }

    // If we got this far, the game must not be over!
    return false
}

const switchToNextPlayer = function () {
    //     TODO: Toggle currentPlayer variable 1 <--> 2
}

const columnClickHandler = function (eventObj) {
    const selectedCol = eventObj.currentTarget
    const columnNum = Number(selectedCol.id.slice(-1))
    console.log(`Click on column ${columnNum}`)
    if (isColumnFull(columnNum)) {
        displayMessage("Can't drop a disc in a full column")
    } else {
        dropDisc(columnNum, selectedCol, currentPlayer)

        const gameStatus = isGameOver(boardModel)
        if (gameStatus === "tie") {
            displayTieMessage()
        } else if (gameStatus === "win") {
            displayWinMessage()
        } else {
            switchToNextPlayer()
        }
    }
}

const setUpEventListeners = function () {
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const initializeGame = function () {
    setUpEventListeners()
    displayCurrentPlayer(currentPlayer)
}

module.exports = {
	winnerVertical,
    winnerHorizontal,
    winnerDiagonalUp,
    initializeGame
};
