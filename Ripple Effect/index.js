let container = document.querySelector('.container')
const divArr = [];
const colors = ['#49FF00', '#FBFF00', '#FF9300', '#FF0000', '#1CD6CE']


const makeDiv = () => {
    for (i = 0; i < 15; i++) {
        divArr[i] = []
        for (j = 0; j < 15; j++) {
            let div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div)
            divArr[i].push(div)
        }
    }

}
makeDiv()


const growDiv = (i, j) => {
    let randomCol = Math.floor(Math.random() * colors.length);
    
    if (divArr[i] && divArr[i][j] && !divArr[i][j].classList.contains('grow')) {
        
        divArr[i][j].classList.add('grow')
        divArr[i][j].style.backgroundColor = colors[randomCol]

        setTimeout(() => {
            growDiv(i + 1, j)
            growDiv(i - 1, j)
            growDiv(i, j - 1)
            growDiv(i, j + 1)
        }, 100)

        setTimeout(() => {
            divArr[i][j].classList.remove('grow')
            divArr[i][j].style.backgroundColor = '#fff'

        }, 300)
    }
}



const addColor = () => {
    divArr.forEach((col, i) => {
        col.forEach((row, j) => {
            row.addEventListener('click', () => {
                growDiv(i, j)
            })
        })
    })
}
addColor()
