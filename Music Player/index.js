let coverImg = document.querySelector('.cover-img')
let songName = document.querySelector('.song-name')
let songArtist = document.querySelector('.song-artist')

const sliderBar = document.getElementById('slider-bar')
const playBtn = document.querySelector('.play-btn')
const forwardBtn = document.querySelector('.forward-btn')
const backwardBtn = document.querySelector('.backward-btn')
let currentSong = document.querySelector('.current-song')


const songs = [{ name: 'Faded', artist: 'Alan Walker', songPath: './music/Faded.mp3', coverImg: './images/faded.png' },
{ name: 'Falling Down', artist: 'Lil Peep', songPath: './music/fallingdown.mp3', coverImg: './images/fallingdown.jpg' },
{ name: 'Rather Be', artist: 'Clean Bandit', songPath: './music/Rather Be.mp3', coverImg: './images/ratherbe.jpg' },
{ name: 'Stay', artist: 'Justin Bieber', songPath: './music/stay.mp3', coverImg: './images/stay.png' }
]


const playSong = ()=>{
    if (currentSong.paused || currentSong.currentTime <= 0) {
        currentSong.play()
        playBtn.classList.replace('fa-circle-play' , 'fa-circle-pause')
        coverImg.classList.add('rotate')
    } else {
        currentSong.pause()
        playBtn.classList.replace('fa-circle-pause' , 'fa-circle-play')
        coverImg.classList.remove('rotate')
    }
}

let songIndex = 0;
//sets Cover img, Song name & Song artist
const setCover = (songIndex)=>{
    coverImg.src = songs[songIndex].coverImg
    songName.innerHTML = songs[songIndex].name
    songArtist.innerHTML = songs[songIndex].artist
}
setCover(songIndex) //initial call on load


//change song on forward of backward button click
const changeSong = (x) => {
    if (x === 1) {
        songIndex = (songIndex + 1) % songs.length
        currentSong.src = (songs[songIndex].songPath)
        currentSong.currentTime = 0
        setCover(songIndex)
        coverImg.classList.toggle('rotate')
        playSong()
    }
    else{
        songIndex = (songIndex - 1 + songs.length) % songs.length
        currentSong.src = (songs[songIndex].songPath)
        currentSong.currentTime = 0
        setCover(songIndex)
        coverImg.classList.toggle('rotate')
        playSong()
    }
}

playBtn.addEventListener('click', playSong);

//update Slider
currentSong.addEventListener('timeupdate', () => {
    let updateTime = (currentSong.currentTime / currentSong.duration) * 100
    sliderBar.value = updateTime
    if(currentSong.ended){
        changeSong(1)
    }
})

//Update the current time on slider change
sliderBar.addEventListener('input' , ()=>{
    currentSong.currentTime = (sliderBar.value * currentSong.duration)/100
})


forwardBtn.addEventListener('click' , ()=>{changeSong(1)})
backwardBtn.addEventListener('click' , ()=>{changeSong(2)})





