// Import axios library properly
import axios from "axios";

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let cityElement = document.querySelector("#city");
  let iconElement = document.querySelector("#icon");

  let date = new Date(response.data.time * 1000);

  timeElement.textContent = formatDate(date);
  descriptionElement.textContent = response.data.condition.description;
  humidityElement.textContent = `${response.data.temperature.humidity}%`;
  windSpeedElement.textContent = `${response.data.wind.speed} km/h`;
  cityElement.textContent = response.data.location.name;
  temperatureElement.textContent = Math.round(
    response.data.temperature.current
  );

  
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" alt="Weather Icon" />`;
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
    const response = await axios.get(apiUrl);
    refreshWeather(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("City not found");
  }
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;

  searchCity(searchInput.value);

  searchInput.value = "";
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);
