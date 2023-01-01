let lights = document.querySelectorAll('.light');
let color = ['redColor', 'yellowColor', 'greenColor']

let activeLight = 0;



const addLight = () => {
    lights[activeLight].className = 'light'
    activeLight++;
    
    if (activeLight > 2) {
        activeLight = 0;
    }
    
    lights[activeLight].classList.add(color[activeLight])
    
    setTimeout(addLight, 1000)
}

addLight();