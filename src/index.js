function refreshWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let temperature = response.data.current.temp_c;
  let cityElement = document.querySelector("#city");

  cityElement.textContent = response.data.location.name;
  temperatureElement.textContent = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb"; 
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`; // Updated API URL
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", handleSearchSubmit);
