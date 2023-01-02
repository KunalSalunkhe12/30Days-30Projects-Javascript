let container = document.querySelector('.container')
const colors = ['#49FF00', '#FBFF00', '#FF9300', '#FF0000', '#1CD6CE']

const makeDiv = () => {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 15; j++) {
            let div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div)
        }
    }

}
makeDiv()

const allDiv = document.querySelectorAll('.box')

const addColor = () => {
    allDiv.forEach(div => {
        div.addEventListener('mouseover', (activeDiv) => {
            let randomColor = Math.floor(Math.random() * colors.length)

            activeDiv.target.style.backgroundColor = colors[randomColor]

            setTimeout(() => {
                activeDiv.target.style.backgroundColor = '#000'
            }, 500)
        })
    })
}
addColor()
