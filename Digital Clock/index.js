
let hr = document.querySelector('.hr');
let mn = document.querySelector('.mn');
let sc = document.querySelector('.sc');
let am = document.querySelector('.am');
let checkBox = document.querySelector('.check');

const getTime = ()=>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hour >= 12){
        am.innerHTML= 'PM'
    }

    hr.innerHTML = String(hour).padStart(2 , '0');
    mn.innerHTML = String(min).padStart(2 , '0');
    sc.innerHTML = String(sec).padStart(2 , '0');

}

setInterval(getTime , 1000);
getTime();