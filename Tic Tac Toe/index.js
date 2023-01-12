const squares = Array.from(document.querySelectorAll('.square'))
const turn = document.querySelector('.turn')
const winner = document.querySelector('.winner')
const over = document.querySelector('.over')
const mainContainer = document.querySelector('.main-container')
const reset = document.querySelector('.reset')

let isXTurn = true;

const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const setTurn = (square)=>{
    if (square.innerHTML === '') {
        isXTurn ? square.innerHTML = 'X' : square.innerHTML = 'O';
        isXTurn = !isXTurn
        turn.innerHTML = isXTurn ? 'X Turn' : 'O turn'
    }
}

const checkWin = () => {

    winCondition.forEach(condition => {
        let [a, b, c] = condition;

        if (squares[a].innerHTML !== '' && squares[a].innerHTML === squares[b].innerHTML && squares[a].innerHTML === squares[c].innerHTML) {
            over.style.display = 'block';
            mainContainer.classList.add('blur')
            winner.innerHTML = `${squares[a].innerHTML} Wins`
        }

    })

}

const checkDraw = () => {
    let emptySquares = squares.filter(square => {
        return square.innerHTML === ''
    })

    if (emptySquares.length === 0) {
        over.style.display = 'block';
        mainContainer.classList.add('blur')
        winner.innerHTML = 'Draw!'
    }
}

squares.forEach(square => {
    square.addEventListener('click', () => {       
        setTurn(square)
        checkWin()
        checkDraw()
    })

})



reset.addEventListener('click', () => {
    over.style.display = 'none';
    mainContainer.classList.remove('blur')
    turn.innerHTML = ''
    squares.forEach(square => {
        square.innerHTML = '';
    })

})