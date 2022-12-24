let joke = document.querySelector('.joke');
let jokeBtn = document.querySelector('.jokeBtn');

jokeBtn.addEventListener('click', () => {

    let type = document.querySelectorAll('.jokeType');

    let jokeType = [];
    type.forEach(x => {
        if (x.checked) {
            jokeType.push(x.value);
        }
    });
    
    if (jokeType.length == 0) {
        alert('Please Select JokeType');
    }

    let url = `https://v2.jokeapi.dev/joke/${jokeType}?type=single`

    fetch(url)
        .then(res => res.json())
        .then(data => joke.innerHTML = data.joke)

})

