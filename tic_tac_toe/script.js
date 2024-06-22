let playerOne = "";
let playerTwo = "";
const turnDiv = document.querySelector(".turn");

if (playerOne === "" || playerTwo === "") {
    turnDiv.textContent = "Enter player names to play ↑";
}

const nameForm = document.getElementById("myForm");
function validateForm() {
    playerOne = document.forms["myForm"]["player1"].value;
    playerTwo = document.forms["myForm"]["player2"].value;
    if (playerOne === "" || playerTwo === "") {
        alert("Name must be filled out");
        return false;
    } else if (playerOne !== "" && playerTwo !== "") {
        const nameInputDiv = document.getElementById("name_input");
        nameInputDiv.innerHTML = "";
        nameInputDiv.innerHTML = `<span class="player1">${playerOne}</span> VS. <span class="player2">${playerTwo}</span>`;
        ScreenController();
        return false;
    }
}

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const addSymbol = (row, column, player) => {
        if (board[row][column].getValue() !== ' ') {
            return;
        }
        board[row][column].markSymbol(player);
    };

    return { getBoard, addSymbol };
}

function Cell() {
    let value = ' ';
    let playerClass = '';

    const markSymbol = (player) => {
        value = player.symbol;
        playerClass = player.class;
    };

    const getValue = () => value;
    const getClass = () => playerClass;

    return {
        markSymbol,
        getValue,
        getClass
    };
}

function GameController(playerOneName, playerTwoName, updateScreenCallback) {
    const board = Gameboard();
    const players = [
        {
            name: playerOneName,
            symbol: 'O',
            class: 'player1'
        },
        {
            name: playerTwoName,
            symbol: 'X',
            class: 'player2'
        }
    ];

    let activePlayer = players[0];
    let winner = null;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const checkWinner = (r, c) => {
        const boardArray = board.getBoard();
        const currentSymbol = getActivePlayer().symbol;
        const boardSize = boardArray.length;

        if (boardArray[r].every(cell => cell.getValue() === currentSymbol)) {
            return true;
        }

        if (boardArray.every(row => row[c].getValue() === currentSymbol)) {
            return true;
        }

        if (r === c && boardArray.every((row, i) => row[i].getValue() === currentSymbol)) {
            return true;
        }

        if (r + c === boardSize - 1 && boardArray.every((row, i) => row[boardSize - 1 - i].getValue() === currentSymbol)) {
            return true;
        }

        return false;
    };

    const playRound = (row, column) => {
        if (winner) return;
        board.addSymbol(row, column, getActivePlayer());

        if (checkWinner(row, column)) {
            winner = getActivePlayer();
        }

        switchPlayerTurn();
        updateScreenCallback();
    };

    return {
        playRound,
        getActivePlayer,
        getBoard: board.getBoard,
        getWinner: () => winner
    };
}

function ScreenController() {
    const game = GameController(playerOne, playerTwo, UpdateScreen);
    const containerDiv = document.querySelector(".container");
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector('.board');

    function UpdateScreen() {
        boardDiv.textContent = "";
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();
        const winner = game.getWinner();

        if (winner) {
            playerTurnDiv.textContent = `${winner.name} wins!`;
            const playAgain = document.createElement("button");
            playAgain.setAttribute("id", "play-again");
            playAgain.textContent = "Play Again";
            containerDiv.appendChild(playAgain);

            playAgain.addEventListener("click", () => {
                window.location.reload();
            });

        } else {
            playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
        }

        board.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellBtn = document.createElement("button");
                cellBtn.classList.add("cell");
                cellBtn.dataset.column = columnIndex;
                cellBtn.dataset.row = rowIndex;
                cellBtn.textContent = cell.getValue();
                if (cell.getClass()) {
                    cellBtn.classList.add(cell.getClass());
                }
                boardDiv.appendChild(cellBtn);
            });
        });
    }

    function clickHandlerBoard(e) {
        if (!e.target.classList.contains("cell")) return;
    
        const selectedColumn = parseInt(e.target.dataset.column);
        const selectedRow = parseInt(e.target.dataset.row);
        if (isNaN(selectedColumn) || isNaN(selectedRow)) return;
    
        const board = game.getBoard();
        if (board[selectedRow][selectedColumn].getValue() !== ' ') {
            // Cell is already taken, ignore
            return;
        }
    
        game.playRound(selectedRow, selectedColumn);
    }

    boardDiv.addEventListener("click", clickHandlerBoard);
    UpdateScreen();
}
