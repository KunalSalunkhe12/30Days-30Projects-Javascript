const cityNameInput = document.querySelector('.enter-city')
const enterBtn = document.querySelector('.enter-btn')
const currentCity = document.querySelector('.current-city')
const date = document.querySelector('.date')
const currentTemperature = document.querySelector('.temperature')
const weatherImg = document.querySelector('.weather-img')
const weather = document.querySelector('.weather')
const weatherContainer = document.querySelector('.weather-container')

const API_KEY = '9c87ef210d9c35e7ad6aea980b4ee740'
weatherContainer.style.display = 'none'

const setWeatherData = () =>{
    const cityName = cityNameInput.value;

    if (!cityName) {
        alert('Please enter City Name')
        return
    }
    
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    
    fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
            let weatherData = data;

            if (weatherData.cod == 200) {
                weatherContainer.style.display = 'flex'
                currentCity.innerHTML = weatherData.name;

                var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
                var today = new Date();
                date.innerHTML = today.toLocaleDateString('en-US', options)

                currentTemperature.innerHTML = Math.floor(weatherData.main.temp) + '\xB0C'

                weather.innerHTML = weatherData.weather[0].main

                let weatherIcon = weatherData.weather[0].icon;
                let weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

                weatherImg.src = weatherIconUrl;
            } 
            else {
                alert('Please enter Correct City Name')
                return
            }
        });

    cityNameInput.value = '';
}

enterBtn.addEventListener('click', setWeatherData)
window.addEventListener('keydown' , (e)=>{
    if(e.key === 'Enter'){
        setWeatherData()
    }else{
        return
    }
})



// weatherContainer.style.display = 'none'