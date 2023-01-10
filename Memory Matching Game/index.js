const cards = document.querySelectorAll('.card')
const cardsFront = document.querySelectorAll('.card-front')

let previousCard;

cards.forEach(card => {
    card.addEventListener('click', (e) => {

        if (!card.classList.contains('show-card')) {
            card.classList.add('show-card')
        }

        if (!previousCard) {
            previousCard = card;
        }
        else{
            let firstMatch = previousCard;
            let secondMatch = card;
            if (firstMatch.innerHTML !== secondMatch.innerHTML) {
                setTimeout(() => {
                    firstMatch.classList.remove('show-card')
                    secondMatch.classList.remove('show-card')
                }, 800)
            }
            previousCard = undefined;
        }

    })
})