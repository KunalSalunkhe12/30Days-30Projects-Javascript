let board = document.querySelector('.board')
let scoreVal = document.querySelector('.score')

const speed = 4
const foodSound = new Audio('./music/food.mp3') 
const gameOverSound = new Audio('./music/gameover.mp3') 
const moveSound = new Audio('./music/move.mp3')

let inputDir = { x: 0, y: 0 };
let lastPaintTime = 0
let snakeArr = [
    { x: 14, y: 18 }
]
let food = { x: 6, y: 5 }
let score = 0;




function main(ctime) {
    window.requestAnimationFrame(main)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime
    gameEngine()
}

function isCollide(snake) {
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    if(snake[0].x >= 21 || snake[0].x <= 0 || snake[0].y >= 21 || snake[0].y <= 0){
        return true
    }
}

function gameEngine() {

    //Collision
    if (isCollide(snakeArr)) {
        gameOverSound.play()
        snakeArr = [
            { x: 14, y: 18 }
        ]
        food = { x: 6, y: 5 }
        inputDir = { x: 0, y: 0 }
        score = 0
        alert('Game over!')
    }

    //Move snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }
    }

    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y

    // Ate food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play()
        score++
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        food = { x: Math.round(Math.random() * 18 + 2), y: Math.round(Math.random() * 18 + 2) }
    }


    //update/display snake body
    board.innerHTML = "";
    snakeArr.forEach(el => {
        let snakeEl = document.createElement('div')
        snakeEl.style.gridRowStart = el.y;
        snakeEl.style.gridColumnStart = el.x;
        snakeEl.classList.add('snake')
        board.appendChild(snakeEl)

    })

    //update/display snake food
    let foodEl = document.createElement('div')
    foodEl.style.gridRowStart = food.y;
    foodEl.style.gridColumnStart = food.x;
    foodEl.classList.add('food')
    board.appendChild(foodEl)

    //Score
    scoreVal.innerHTML = `Score: ${score}`;

}






window.requestAnimationFrame(main)
window.addEventListener('keydown', (e) => {
    moveSound.play()
    inputDir = { x: 0, y: -1 }

    switch (e.key) {
        case 'ArrowUp':
            inputDir = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            inputDir = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            inputDir = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            inputDir = { x: 1, y: 0 }
            break

        default:
            break;
    }
})
