const img = document.querySelector('img')
const container = document.querySelector('.container')


container.addEventListener('mousemove', (e) => {
    const size = container.getBoundingClientRect();
    
    let x = size.x
    let y = size.y

    let width = size.width
    let height = size.height

    const horizontal = (e.clientX - x)/width * 100;
    const vertical = (e.clientY - y)/height * 100;
    
    img.style.transform = `translate(-${horizontal}%, -${vertical}%) scale(3)`

})



container.addEventListener('mouseleave', ()=>{
    img.style.transform = 'translate(-50%, -50%) scale(1)'
})