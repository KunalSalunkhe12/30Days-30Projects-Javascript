const numbers = '0123456789';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
const symbols = '~!@#$%^&';

const characters = [numbers, lowerCase, upperCase, symbols];
const passSize = 12;

// selectors
const passInput = document.querySelector('.password');
const numberInput = document.querySelector('.numbers');
const lowerInput = document.querySelector('.lowercase');
const upperInput = document.querySelector('.uppercase');
const symbolInput = document.querySelector('.symbols');


const passGenerate = ()=>{
  let password = '';
  let charStr = '';
    for(i=0; i<passSize; i++){
        if(upperInput.checked) charStr = charStr.concat(upperCase);
        if(lowerInput.checked ) charStr = charStr.concat(lowerCase);
        if(numberInput.checked) charStr = charStr.concat(numbers);
        if(symbolInput.checked) charStr = charStr.concat(symbols);

        for(i=0; i<=passSize; i++){
            let randomChar = Math.floor(Math.random()*charStr.length);
            password += charStr[randomChar];
        }
    }
  passInput.value = password;  
}

const passGenBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.fa-copy');

passGenBtn.addEventListener('click', passGenerate);
copyBtn.addEventListener('click' , ()=>{
    passInput.select();
    navigator.clipboard.writeText(passInput.value);
    copyBtn.classList.add('clicked');

    setTimeout(()=>{
        copyBtn.classList.remove('clicked');
    },100)
});
   











