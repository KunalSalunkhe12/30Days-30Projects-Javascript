let colorInput = document.getElementById('color');
let background = document.querySelector('.flex-container');

let hexInput = document.getElementById('hexCode');
let rgbInput = document.getElementById('rgbCode');
let hslInput = document.getElementById('hslCode');


const hexCode = (colorHexCode) => {
    hexInput.value = colorHexCode;
    background.style.background = colorHexCode;
}


const hexToRgbToHsl = (colorHexCode) => {
    //For hex to rgb
    let red = colorHexCode.slice(1, 3);
    let green = colorHexCode.slice(3, 5);
    let blue = colorHexCode.slice(5, 7);

    r = parseInt(red, 16);
    g = parseInt(green, 16);
    b = parseInt(blue, 16);

    let colorRgbCode = `rgb(${r},${g},${b})`
    rgbInput.value = colorRgbCode;


    // for rgb to hsl
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    let colorHslCode = `hsl(${h},${s}%,${l}%)`;
    hslInput.value = colorHslCode;

}


// Default color
colorInput.value = "#4f7cc4";
hexCode(colorInput.value);
hexToRgbToHsl(colorInput.value);


// On Picking the color
colorInput.addEventListener('change', () => {
    hexCode(colorInput.value);
    hexToRgbToHsl(colorInput.value);
})


let colorCodeInput = document.querySelectorAll('.colorCode');
colorCodeInput.forEach(e =>{
    e.addEventListener('click' , ()=>{
        navigator.clipboard.writeText(e.value);
    })
})

