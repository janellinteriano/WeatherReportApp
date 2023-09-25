const apiKey = 'my api key';
const apiUrl='api url';
const weatherImg = document.querySelector(".city-temp img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "\u00B0 F";
    document.querySelector(".wind-speed-number").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humid-perc").innerHTML  = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weatherImg.src = "images/clouds.png";
        document.querySelector(".container").style.background="dodgerblue";
    }
    else if (data.weather[0].main == "Clear") {
        weatherImg.src = "images/clear.png";
        document.querySelector(".container").style.background="deepskyblue";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "images/drizzle.png";
        document.querySelector(".container").style.background="grey";
    }
    else if (data.weather[0].main == "Mist") {
        weatherImg.src = "images/mist.png";
        document.querySelector(".container").style.background="cadetblue";
    }
    else if (data.weather[0].main == "Rain") {
        weatherImg.src = "images/rain.png";
        document.querySelector(".container").style.background="dimgrey";
    }
    else if (data.weather[0].main == "Snow") {
        weatherImg.src = "images/snow.png";
        document.querySelector(".container").style.background="cornflowerblue";
    }
}

checkWeather();
