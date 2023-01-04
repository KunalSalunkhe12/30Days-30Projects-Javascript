let textArea = document.querySelector('.textarea')
let characters = document.querySelector('.characters')
let words = document.querySelector('.words')
let sentences= document.querySelector('.sentences')

textArea.addEventListener('input', () => {
    let characterNumber = textArea.value.length;
    characters.innerHTML = `${characterNumber} Characters`

    let wordsArray = textArea.value.trimEnd().split(/ ./g)
    let wordsNumber = wordsArray.length;
    if(textArea.value == ''){
        words.innerHTML = '0 Words';
    }else{
        words.innerHTML = `${wordsNumber} Words`
    }
    
    let sentencesArray = textArea.value.trimEnd().split(/[.!?]+/g);
    let sentencesNumber = sentencesArray.length - 1;
    sentences.innerHTML = `${sentencesNumber} Sentences`

})