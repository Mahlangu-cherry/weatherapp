function refreshWeather(response) {
 
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.textContent = response.data.city;
  temperatureElement.textContent = (temperature);
  temperatureElement.textContent = Math.ceil(response.data.temperature.current);
}

function searchCity(city) {
async function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


  try {
    await axios.get(apiUrl).then(refreshWeather);
  } catch {
    alert("City not found");
  }
}
  
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;
  temperatureElement.textContent = searchInput.value;

  
  searchCity(searchInput.value);

  
  document.getElementById("searchInput").value = "";
  document.getElementById("search-form").reset();
}

let searchForm = document.querySelector("#search-form");