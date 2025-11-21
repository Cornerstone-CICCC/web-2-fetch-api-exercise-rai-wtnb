const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1";

async function getWeather() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const temperature = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;
    const timezone = data.timezone;
    const time = data.current.time;

    document.getElementById("temperature").textContent = temperature;
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("timezone").textContent = timezone;
    document.getElementById("time").textContent = new Date(
      time
    ).toLocaleString();
  } catch (error) {
    console.log(error);
  }
}

getWeather();
