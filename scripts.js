(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
    return gameboard = {
        board:["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
    }
}());

let gameSetup = (function() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {button.addEventListener('click', function handleClick(event) {
        console.log(event.target.id)
        gamePlay.checkSelection(event)
    })})
    }());

function createUser(sigil, name) {
        return {sigil, name}}    

let player1 = createUser('x', 'Kat')
let player2 = createUser('o', 'Jones')
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
        this.switchPlayer(currentPlayer)}
,
    determinePlayer: function(turn) {
        if (turn % 2 == 0) {return currentPlayer = player2}
        else {return currentPlayer = player1}
    }
,
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
            if (gameboard.board[1].includes(checkSymbol) && gameboard.board[2].includes(checkSymbol))
                {this.announceWinner(currentPlayer)}
            if (gameboard.board[3].includes(checkSymbol) && gameboard.board[6].includes(checkSymbol))
                {console.log('win2')}
            if (gameboard.board[4].includes(checkSymbol) && gameboard.board[8].includes(checkSymbol))
                {console.log('win6')}
        }
        else if (gameboard.board[4].includes(checkSymbol)) {
            if (gameboard.board[3].includes(checkSymbol) && gameboard.board[5].includes(checkSymbol))
                {console.log('win3')}
            if (gameboard.board[1].includes(checkSymbol) && gameboard.board[7].includes(checkSymbol))
                {console.log('win4')}
            if (gameboard.board[2].includes(checkSymbol) && gameboard.board[6].includes(checkSymbol))
                {console.log('win5')}
        }
        else if (gameboard.board[8].includes(checkSymbol)) {
            if (gameboard.board[6].includes(checkSymbol) && gameboard.board[7].includes(checkSymbol))
                {console.log('win7')}
            if (gameboard.board[2].includes(checkSymbol) && gameboard.board[5].includes(checkSymbol))
                {console.log('win8')}
        }
    },

    announceWinner: function(currentPlayer) {
        let winner = currentPlayer.name
        let header = document.querySelector('.announcement')
        header.textContent = `${winner} wins!`
        this.stopPlay()
    },

    stopPlay: function() {
        const buttons = document.querySelectorAll('button')
        buttons.forEach(button => {button.style.pointerEvents = "none"})}
}}());





