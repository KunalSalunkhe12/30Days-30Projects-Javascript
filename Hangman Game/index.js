let wordSpot = document.querySelector('.word-spot')
let buttonContainer = document.querySelector('.button-container')
let guessLeft = document.querySelector('.guess-left')
let hangman = document.querySelector('.hangman')
let reset = document.querySelector('.reset')

const languages = [
	"PYTHON",
	"JAVASCRIPT",
	"SWIFT",
	"RUST",
	"JAVA",
	"MATLAB",
	"TYPESCRIPT",
	"CSHARP",
	"GOLANG",
	"KOTLIN",
	"PHP",
	"SQL",
	"RUBY"
]

let word = ''
let guessedLetters = []
let totalGuesses = 6

const randomWord = () => {
	word = languages[Math.floor(Math.random() * languages.length)]
	console.log(word)
}

const handleGuess = (chosenLetter) => {
	guessedLetters.push(chosenLetter);
	document.getElementById(chosenLetter).setAttribute('disabled' , true)

	if (word.includes(chosenLetter)) {
		guessedWord()
	} else {
		totalGuesses--
		if(totalGuesses === 0){
			buttonContainer.innerHTML = 'YOU LOST'
			wordSpot.innerHTML = `The word was: ${word}`
		}
		if(totalGuesses >= 0){
			hangman.src = `./images/${6 - totalGuesses}.jpg`
			guessLeft.innerHTML = `Guesses Left: ${totalGuesses}`
		}
	}
}

const guessedWord = () => {
	let wordStatus = word.split('').map(letter => guessedLetters.includes(letter) ? letter : ' _ ').join(' ')
	wordSpot.innerHTML = wordStatus;
	if(!wordStatus.includes('_')){
		buttonContainer.innerHTML = 'YOU WON!!!!'
	}
}

const generateBtn = () => {
	let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	alphabets.forEach(letter => {
		let button = document.createElement('button')
		button.innerHTML = `${letter}`
		button.classList.add('btn')
		button.id = `${letter}`
		button.addEventListener('click' , ()=>{handleGuess(`${letter}`)})
		buttonContainer.appendChild(button)
	})
}

randomWord()
guessedWord()
generateBtn()

reset.addEventListener('click' , ()=>{
	guessedLetters = []
	totalGuesses = 6
	guessLeft.innerHTML = `Guesses Left: ${totalGuesses}`
	hangman.src = `./images/0.jpg`
	buttonContainer.innerHTML = ''

	randomWord()
	guessedWord()
	generateBtn()

})