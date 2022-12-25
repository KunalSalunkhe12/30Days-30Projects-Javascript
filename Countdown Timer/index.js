let counterBtn = document.querySelectorAll('.counterBtn');
let start = document.querySelector('.startBtn')
let reset = document.querySelector('.resetBtn')

let hr = document.querySelector(`[data-count="hr"]`);
let mn = document.querySelector(`[data-count="mn"]`);
let sc = document.querySelector(`[data-count="sc"]`);

hr.innerHTML = 0;
mn.innerHTML = 0;
sc.innerHTML = 0;



counterBtn.forEach(counterBtn => {
    counterBtn.addEventListener('click', () => {

        if (counterBtn.dataset.btn === 'hr') {
            (counterBtn.innerHTML === '-' && hr.innerHTML >= 1) ? hr.innerHTML-- : hr.innerHTML++;
        }
        if (counterBtn.dataset.btn === 'mn') {
            (counterBtn.innerHTML === '-' && mn.innerHTML > 0) ? mn.innerHTML-- : mn.innerHTML++;
            console.log(mn.innerHTML)
        }
        if (counterBtn.dataset.btn === 'sc') {
            (counterBtn.innerHTML === '-' && sc.innerHTML > 0) ? sc.innerHTML-- : sc.innerHTML++;
        }
    });
})


function timer() {
    if (hr.innerHTML == 0 && mn.innerHTML == 0 && sc.innerHTML == 0) {
        hr.innerHTML = 0;
        mn.innerHTML = 0;
        sc.innerHTML = 0;
    } else if (sc.innerHTML != 0) {
        sc.innerHTML--;
    } else if (mn.innerHTML != 0 && sc.innerHTML == 0) {
        sc.innerHTML = 59;
        mn.innerHTML--;
    } else if (hr.innerHTML != 0 && mn.innerHTML == 0) {
        mn.innerHTML = 60;
        hr.innerHTML--;
    }
    return;
}

let timeRef;

start.addEventListener('click', () => {
    clearInterval(timeRef);
    timeRef = setInterval(() => {
        if (hr.innerHTML == 0 && mn.innerHTML == 0 && sc.innerHTML == 0) {
            hr.innerHTML = 0;
            mn.innerHTML = 0;
            sc.innerHTML = 0;
        } else if (sc.innerHTML != 0) {
            sc.innerHTML--;
        } else if (mn.innerHTML != 0 && sc.innerHTML == 0) {
            sc.innerHTML = 59;
            mn.innerHTML--;
        } else if (hr.innerHTML != 0 && mn.innerHTML == 0) {
            mn.innerHTML = 60;
            hr.innerHTML--;
        }
    }, 1000)
});

reset.addEventListener('click', () => {
    hr.innerHTML = 0;
    mn.innerHTML = 0;
    sc.innerHTML = 0;

    clearInterval(timeRef)
})