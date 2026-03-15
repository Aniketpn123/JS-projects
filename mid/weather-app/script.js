let display = document.querySelector(".display");
getData();
async function weatherApp(params) {
  let key = "ebf515992246836a3970c14871608e63";
  let city = document.getElementById("city").value.trim();
  display.innerHTML = "Loading weather...";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    display.innerHTML = `<p class="cityName">${data.name}</p>
          <p class="temp">${data.main.temp} °C</p>`;
  }catch (err) {

  if (err.message.includes("")) {
    display.innerHTML = "City not found";
  } else {
    display.innerHTML = "Network error";
  }

}
  saveData();
}

function saveData() {
  localStorage.setItem("data", display.innerHTML);
}
function getData() {
  display.innerHTML = localStorage.getItem("data");
}
