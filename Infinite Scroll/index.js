const mainContainer = document.querySelector('.main-container')
const goUp = document.querySelector('.up')
const loader = document.querySelector('.loader')

const createImage = () => {
    for (i = 0; i < 6; i++) {
        let randomImage = Math.floor((Math.random() * 200) + 1)

        fetch(`https://picsum.photos/id/${randomImage}/300`)
            .then(res => {
                if (res.ok) {
                    let image = document.createElement('img')
                    image.src = `https://picsum.photos/id/${randomImage}/300`
                    mainContainer.appendChild(image);
                    loader.style.display = 'none'

                }
            })
    }
}

createImage();


window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        loader.style.display = 'inline-block'
        createImage()
    }
})

goUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
})