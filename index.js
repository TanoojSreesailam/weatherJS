const apiKey = "608e494159fd9a05ad9b78a98feb033c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const inputBar = document.querySelector('.search input');
const submit = document.querySelector('.search button');
const weatherIcon = document.querySelector('.icon')

async function weather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C"
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.Wind').innerHTML = data.wind.speed + " km/h"
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/images/clouds.png";
        }
        else if (data.weather[0].main == " Clear") {
            weatherIcon.src = "images/images/clear.png"
        }
        else if (data.weather[0].main == " Rain") {
            weatherIcon.src = "images/images/rain.png"
        }
        else if (data.weather[0].main == " Mist") {
            weatherIcon.src = "images/images/mist.png"
        }
        else if (data.weather[0].main == " Drizzlet") {
            weatherIcon.src = "images/images/drizzle.png"
        }
    }
}

submit.addEventListener("click", ()=>{
    weather(inputBar.value);
})

weather("Visakhapatnam");