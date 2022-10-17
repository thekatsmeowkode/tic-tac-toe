(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
    let turnDisplay = document.querySelector('.announcement')
    turnDisplay.textContent = "Player 1's Turn"
    return gameboard = {
        board:["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
    }
}());

//iife
let gameSetup = (function() {
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {button.addEventListener('click', (event) => {
            gamePlay.checkSelection(event);
        })})
    }());

// factory function to create user
function createUser(sigil, name) {
        return {sigil, name}}    

let player1 = createUser('X', 'Player 1')
let player2 = createUser('O', 'Player 2')
let turn = 1

let gamePlay = (function () {
    return {
    checkSelection: function(event) {
        this.determinePlayer(turn)
        turn++
            if (event.target.innerText !== '') {return}
            else {event.target.innerText = currentPlayer.sigil}
        let boardSelection = event.target.id
        this.updateGameBoardArray(boardSelection)
        this.checkVictory(gameboard)
        this.switchPlayer(currentPlayer)
        if (turn == 10) {this.announceDraw()}
    },

    determinePlayer: function(turn) {
        let turnDisplay = document.querySelector('.announcement')
        if (turn % 2 === 0) {
            turnDisplay.textContent = "Player 1's Turn"
            return currentPlayer = player2}
        else {
            turnDisplay.textContent = "Player 2's Turn"
            return currentPlayer = player1}
    },

    switchPlayer: function(currentPlayer) {
        currentPlayer == player1 ? player2 : player1
    },
    updateGameBoardArray: function(boardSelection) {
        let index = gameboard.board.indexOf(boardSelection)
        gameboard.board[index] = currentPlayer.sigil
    },
    checkVictory: function(gameboard) {
        let checkSymbol = currentPlayer.sigil
        if (gameboard.board[0].includes(checkSymbol)) {
            if  (
                (gameboard.board[1].includes(checkSymbol) && gameboard.board[2].includes(checkSymbol))
            ||  (gameboard.board[3].includes(checkSymbol) && gameboard.board[6].includes(checkSymbol))
            ||  (gameboard.board[4].includes(checkSymbol) && gameboard.board[8].includes(checkSymbol))
                )
                {this.announceWinner(currentPlayer)}
        }
        else if (gameboard.board[4].includes(checkSymbol)) {
            if  (
                (gameboard.board[3].includes(checkSymbol) && gameboard.board[5].includes(checkSymbol))
            ||  (gameboard.board[1].includes(checkSymbol) && gameboard.board[7].includes(checkSymbol))
            ||  (gameboard.board[2].includes(checkSymbol) && gameboard.board[6].includes(checkSymbol))
                )
                {this.announceWinner(currentPlayer)}
        }
        else if (gameboard.board[8].includes(checkSymbol)) {
            if  (
                (gameboard.board[6].includes(checkSymbol) && gameboard.board[7].includes(checkSymbol))
            ||  (gameboard.board[2].includes(checkSymbol) && gameboard.board[5].includes(checkSymbol))
                )
                {this.announceWinner(currentPlayer)}
        }
    },

    announceWinner: function(currentPlayer) {
        let winner = currentPlayer.name
        let header = document.querySelector('.announcement')
        header.textContent = `${winner} wins!`
        this.stopPlay()
    },
    announceDraw: function() {
        let header = document.querySelector('.announcement')
        header.textContent = "It's a draw"
        this.stopPlay()
    },

    stopPlay: function() {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {button.style.pointerEvents = "none"
        })
    },

}}());



const resetButton = document.querySelector('#reset-button')
console.log(resetButton)
resetButton.addEventListener('click', () => {window.location.reload()})



