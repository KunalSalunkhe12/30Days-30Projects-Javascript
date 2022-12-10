
const playSound = (keyCode)=>{
    
    let audio = document.querySelector(`audio[data-key="${keyCode}"`);
    audio.currentTime = 0;
    audio.play();


    let key = document.querySelector(`.key[data-key="${keyCode}"`);
    key.classList.add('playing');
    
    setTimeout(()=>{
        key.classList.remove('playing')
    }, 70)
}




window.addEventListener('keypress' , (e)=>{
    keyPress = (e.key);
    playSound(keyPress);

}); 
   


let keys = document.querySelectorAll('.key')
keys.forEach((key) =>{
    key.addEventListener('click' , (e)=>{
        keyClick = (e.target.innerHTML).toLowerCase()
        playSound(keyClick);
    })
});
