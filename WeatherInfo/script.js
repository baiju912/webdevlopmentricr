
async function submit()
{
    const ct = document.getElementById("city").value.trim();

    const {lat, lon} = await getcity(ct);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d5114f17e4beeddd8ec6dbcde711a010`);

    const data = await response.json();

    document.getElementById("weatherData").innerHTML = `
    <div>
             <p>Temperature : ${(data.main.temp - 273.14).toFixed(1)}℃</p>
             <p>Humidity : ${data.main.humidity}%</p>
              <p>Description : ${data.weather[0].description} </p>
           </div>
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="WeatherIcon">
    `




}


async function getcity(city) 
{
    console.log(city);

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d5114f17e4beeddd8ec6dbcde711a010`);

    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lon;

    return {lat, lon};
}