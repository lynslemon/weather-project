function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInputElement.value;
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial";
  let apiKey = "d23dot43ecc9cadd4fe987930b7e4cb5";
  axios.get(apiUrl).then(displayTemperature);
}
console.log(searchInput.value);
let form = document.querySelector("form");
form.addEventListener("submit", search);

let getDate = document.querySelector("#date");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

getDate.innerHTML = `${date} ${hours}:${minutes}`;
