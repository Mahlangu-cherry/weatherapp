function refreshWeather(response) {
  //Here I removed the input update since you are already doing that in the handleSubmit function
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

  //The await makes sure that the data is fetched before it continues
  //Then the try catch makes sure if the city is not found an error is thrown to the user
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

  //you needed to call the searchCity function here so that the api can be called with the city name
  searchCity(searchInput.value);

  //The form is reset after you hit search
  document.getElementById("searchInput").value = "";
  document.getElementById("search-form").reset();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);
