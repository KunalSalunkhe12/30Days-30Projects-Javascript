const randomHexCode = () =>{
    let hexCode = '';
    let hexData = '0123456789abcdef'
    

    for(let i=0; i<6; i++){
        let randomVariable = Math.floor(Math.random()*(hexData.length));
        hexCode += hexData[randomVariable]
    }

    let hexColorCode = `#${hexCode}`
    return (hexColorCode);
}

let heading = document.querySelector('.title')
heading.style.color = randomHexCode();

let colorBox = document.querySelectorAll('.color');
colorBox.forEach((box)=>{
    box.innerHTML = randomHexCode();
    box.style.backgroundColor = randomHexCode();
    box.addEventListener('click' , ()=>{
        navigator.clipboard.writeText(box.innerHTML);

    })
})



document.querySelector('.reload').addEventListener('click',()=>{
    window.location.reload(true);
})

  
    

