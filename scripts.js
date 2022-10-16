(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
    const a1 = document.getElementById('a1')
    const a2 = document.getElementById('a2')
    const a3 = document.getElementById('a3')
    const b1 = document.getElementById('b1')
    const b2 = document.getElementById('b2')
    const b3 = document.getElementById('b3')
    const c1 = document.getElementById('c1')
    const c2 = document.getElementById('c2')
    const c3 = document.getElementById('c3')
    let gameboard

    return gameboard = {
        board:[a1, a2, a3, b1, b2, b3, c1, c2, c3]
    }
}());

(function () {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {button.addEventListener('click', function handleClick(event) {
        console.log(event)
    })
    });
}());

function createUser(sigil, name) {
    return {
        sigil:sigil,
        name:name
    }
}

let player1 = createUser('x', 'Kat')
let player2 = createUser('o', 'Jones')