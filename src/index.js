function refresh(response){
    let tempElement = document.querySelector("#temp");
    let temp = response.data.temp.current;
    let cityElement = document.querySelector("#city");

    cityElement.textContent=response.data.city;
    tempElement.textContent = Math.round(temp);
}

function searchCity(city){
let apikey = "6acodfbfaa832f9t2d0703f439a0aaeb";
let apiurl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metrics";
axios.get(apiurl).then(refresh);
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
