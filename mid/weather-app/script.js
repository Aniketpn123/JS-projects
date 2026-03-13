async function getWeather() {
  const key = "ebf515992246836a3970c14871608e63";
  const city = document.getElementById("city").value;
  const display = document.querySelector(".display");

  const url = `    https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    display.innerHTML = `${data.main.temp}%`;
  } catch {
    console.log(Error, "error");
  }
}

getWeather();
