function refresh(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.current.temp_c;
  let cityElement = document.querySelector("#city");

  cityElement.textContent = response.data.location.name;
  tempElement.textContent = Math.round("#temp");
}

function searchCity(city) {
  let apikey = "6acodfbfaa832f9t2d0703f439a0aaeb";
  let apiurl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;
  axios
    .get(apiurl)
    .then((response) => refresh(response.data))
    .catch((error) => console.error("Error fetching data:", error));
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", handleSearchSubmit);
