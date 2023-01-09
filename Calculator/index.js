const display = document.getElementById('display')

const buttons = document.querySelectorAll('.button')
console.log(buttons)
let string = '';



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                display.value = '';
                break;
            case '←':
                if(display.value){
                    display.value = display.value.slice(0,-1)
                }
                break;
            case '=':
                try {
                    display.value = eval(display.value.replace(/[^-+/*\d]/g, ''))
                } catch{
                    display.value = '!error'
                }
                break;
            default:
                display.value += e.target.innerHTML;
                console.log(e.target.innerHTML)
                break;
        }

    })
});