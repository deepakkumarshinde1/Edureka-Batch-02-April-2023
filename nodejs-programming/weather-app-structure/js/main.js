const API = "338d7049189196fba6402362a0f256f2";
async function getWeatherDetails(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
  let response = await fetch(url);
  let data = response.json();

  // print logic
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  let city = input.value;
  getWeatherDetails(city);
});
