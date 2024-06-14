const apiKey = "32a9866ccc767e4f7733b1615ca1afd1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const serchBox = document.querySelector(".search input");
const serchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".weather-icon");
async function chekWeather(city) {
    const response = fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    // console.log(data);



    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }
    else {
        if (data.weather[0].main == "clouds") {
            wheatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            wheatherIcon.src = "images/clear.png";
        }

        else if (data.weather[0].main == "Rain") {
            wheatherIcon.src = "images/rain.png";
        }

        else if (data.weather[0].main == "Drizzle") {
            wheatherIcon.src = "images/drizzle.png";
        }

        else if (data.weather[0].main == "Mist") {
            wheatherIcon.src = "images/mist.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


    // let data = await response.json();


    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = math.round(data.main.temp) + "°c";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";




}



serchBtn.addEventListener("click", () => {
    chekWeather(serchBox.value);
})



chekWeather()