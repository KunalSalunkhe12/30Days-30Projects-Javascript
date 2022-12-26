let textField = document.querySelector('.text-field');
let speedInput = document.querySelector('.speed-val');

let speed = 300/speedInput.value;


let text = "30 Days of Javascript"
let firstLetter = 0;

const updateText = () => {
    if(firstLetter==text.length){
        firstLetter = 0;
        textField.innerHTML = '';
    }
    textField.innerHTML += text.slice(firstLetter, firstLetter + 1)
    firstLetter++;

    console.log(speed)
    setTimeout(updateText, speed);
}

updateText();

speedInput.addEventListener('change' , (e)=>{
    speed = 300/speedInput.value;

   
})






