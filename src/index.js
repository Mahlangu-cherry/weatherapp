
function searchCity(city) {
  let apiKey = "6acodfbfaa832f9t2d0703f439a0aaeb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchform");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
