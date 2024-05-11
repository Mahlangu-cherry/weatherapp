function refreshWeather(response) {
  
let temperatureElement = document.querySelector("#temperature");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);

timeElement.textContent = formatDate(date);
descriptionElement.textContent = response.data.condition.description;
humidityElement.textContent = `${response.data.temperature.humidity}%`;
windSpeedElement.textContent = `${response.data.wind.speed}km/h`;
temperatureElement.textContent = Math.round(temperature);
temperatureElement.textContent = Math.ceil(response.data.temperature.current);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
async function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  
  try {
    await axios.get(apiUrl).then(refreshWeather);
  } catch {
    alert("City not found");
  }
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;

  function getForecast(city) {
    let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
  }

  function displayForecast(response) {
    console.log(response.data);

    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";

    days.forEach(function (day) {
      forecastHtml =
        forecastHtml +
        `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature">9º</div>
        </div>
      </div>
    `;
    });

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  }

  searchCity(searchInput.value);
  displayForecast();
  
  document.getElementById("searchInput").value = "";
  document.getElementById("search-form").reset();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);
