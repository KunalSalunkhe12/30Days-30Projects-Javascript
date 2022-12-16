let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let save = document.querySelector('.save');

let number = document.querySelector('.number');
let numberSave = document.querySelector('.number-save')

let initialNumber = 0;

increase.addEventListener('click', ()=>{
    initialNumber++;
    number.textContent = initialNumber;  
});

decrease.addEventListener('click' , ()=>{
    initialNumber--;
    number.textContent = initialNumber;
});


save.addEventListener('click' , ()=>{
    let span = document.createElement('span')
    span.textContent = number.textContent;
    numberSave.appendChild(span);
})

reset.addEventListener('click' , ()=>{
    number.textContent = 0;
    
})

