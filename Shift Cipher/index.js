const entry = document.getElementById('entry')
const key = document.getElementById('key')
const encryptBtn = document.querySelector('.encrypt-btn')
const decryptBtn = document.querySelector('.decrypt-btn')
const output = document.querySelector('.output')

let dummy = 'KUNAL'
console.log(String.fromCharCode(dummy.charCodeAt(0) + 3))

entry.addEventListener('input', (e) => {
    let newEntry = e.target.value
    entry.value = newEntry.toUpperCase();
})

const cipher = (method) => {
    let str = entry.value;
    let keyVal = Number(key.value);

    if(entry.value !== ''){
        output.style.display = 'block'
    }

    if (method === 'decrypt') {
        keyVal = -1 * keyVal;
    }

    let outputStr = ''

    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let charCodes = (str.charCodeAt(i) + keyVal - 65) % 26 + 65
            if (charCodes < 65) {
                outputStr += String.fromCharCode(charCodes + 26);
            } else {
                outputStr += String.fromCharCode(charCodes);
            }
        }
    }

    output.innerHTML = outputStr;
}

encryptBtn.addEventListener('click', () => { cipher('encrypt') });
decryptBtn.addEventListener('click', () => { cipher('decrypt') });
