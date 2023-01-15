let mn = document.querySelector('.mn');
let sc = document.querySelector('.sc');
let hr = document.querySelector('.hr');
let msc = document.querySelector('.msc');

let lapContainer = document.querySelector('.lap-container')

let stopBtn = document.querySelector('.stop')
let startBtn = document.querySelector('.start')
let lapBtn = document.querySelector('.lap')
let resetBtn = document.querySelector('.reset')

let sec = 0;
let min = 0;
let hour = 0;
let msec = 0;
let timer = true;



const timeUpdate = () => {
    if (timer === true) {
        msec++
        msc.innerHTML = msec.toString().padStart(2, '0');
        if (msec == 99) {
            sec++
            sc.innerHTML = sec.toString().padStart(2, '0');
            msec = 0;
        }
        if (sec == 59) {
            min++
            mn.innerHTML = min.toString().padStart(2, '0');
            sec = 0;
        }
        if (min == 59) {
            hour++
            hr.innerHTML = hour.toString().padStart(2, '0');
            min = 0;
        }
        setTimeout(timeUpdate, 10);
    }
    timer = true;
}

const timeStop = () => {
    timer = false;
}

const timeLap = () => {
    let lapItem = document.createElement('h2');
    lapItem.innerHTML = `${hr.innerHTML}:${mn.innerHTML}:${sc.innerHTML}:${msc.innerHTML}`
    lapContainer.appendChild(lapItem);
}

const timeReset = () => {
    timer = false;

    msc.innerHTML = '00';
    sc.innerHTML = '00';
    mn.innerHTML = '00';
    hr.innerHTML = '00';

    while (lapContainer.hasChildNodes()) {
        lapContainer.removeChild(lapContainer.firstChild)
    }
}


startBtn.addEventListener('click', timeUpdate)
stopBtn.addEventListener('click', timeStop)
resetBtn.addEventListener('click', timeReset)
lapBtn.addEventListener('click', timeLap)