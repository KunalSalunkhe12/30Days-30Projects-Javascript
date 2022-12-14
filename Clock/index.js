const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');


const setRotation = ()=>{
    let date =new Date();
    let hrTime = date.getHours();
    let mnTime = date.getMinutes();
    let scTime = date.getSeconds();
    

    // console.log(`${scTime},${mnTime},${hrTime}`);
    let hrRotation= 30*hrTime + mnTime/2;
    let mnRotation = 6*mnTime;
    let scRotation = 6*scTime;

    

    hr.style.transform = `rotate(${hrRotation}deg)`;
    mn.style.transform = `rotate(${mnRotation}deg)`;
    sc.style.transform = `rotate(${scRotation}deg)`;



}


setInterval(setRotation , 1000);
setRotation();