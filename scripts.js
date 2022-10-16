(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
    return gameboard = {
        board:["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
    }
}());

//factory
function createUser(sigil, name) {
    return {
        sigil:sigil,
        name:name
    }
}

let player1 = createUser('x', 'Kat')
let player2 = createUser('o', 'Jones')

let gamePlay = (function () {
    // let player1 = this.createUser('x', 'Kat')
    // let player2 = this.createUser('o', 'Jones')
        
    // return {
    //     createUser: function(sigil, name) {
    //         return {
    //             sigil:sigil, 
    //             name:name}
    //     },
    return {
        checkSelection: function(event) {
        if (event.target.innerText !== '') {return}
        else {event.target.innerText = currentPlayer.sigil;
        let boardSelection = event.target.id
        let currentPlayer = player1
        this.updateGameBoardArray(boardSelection)
        this.checkVictory(gameboard)
        this.switchPlayer(currentPlayer)}
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
            if (gameboard.board[1].includes(checkSymbol) && gameboard.board[2].includes(checkSymbol))
                {console.log('win')}
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
    }
}}());


const buttons = document.querySelectorAll('button')
buttons.forEach(button => {button.addEventListener('click', function handleClick(event) {
    console.log(event.target.id)
    gamePlay.checkSelection(event)
})})





