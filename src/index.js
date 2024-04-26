function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.current.temp_c;
  let cityElement = document.querySelector("#city");

  cityElement.textContent = response.data.location.name;
  temperatureElement.textContent = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb"; 
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  axios.get(apiUrl).then(refreshWeather); 
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input"); 

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris"); 
