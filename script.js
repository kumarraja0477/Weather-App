const url = 'https://weather-api138.p.rapidapi.com/weather';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '71095f8fedmsh9014f3e7ec9a064p10316bjsnb93f0538081f',
    'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
  }
};

async function fetchWeather(city_name) {
  try {
    const response = await fetch(`${url}?city_name=${city_name}`, options);
    const result = await response.json();

    console.log(result);

    // Accessing the required data from the JSON response
    const tempK = result.main.temp;
    const feels_likeK = result.main.feels_like;
    const humidity = result.main.humidity;
    const min_tempK = result.main.temp_min;
    const max_tempK = result.main.temp_max;
    const wind_speed = result.wind.speed;
    const wind_degrees = result.wind.deg;
    const sunrise = result.sys.sunrise;
    const sunset = result.sys.sunset;

    // Convert temperatures to Celsius
    const tempC = (tempK - 273.15).toFixed(2);
    const feels_likeC = (feels_likeK - 273.15).toFixed(2);
    const min_tempC = (min_tempK - 273.15).toFixed(2);
    const max_tempC = (max_tempK - 273.15).toFixed(2);


    // Updating the HTML elements with Celsius values
    document.getElementById('temp').innerHTML = `${tempC} °C`;
    document.getElementById('temp2').innerHTML = `${tempC} `;
    document.getElementById('feels_like').innerHTML = `${feels_likeC} °C`;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('humidity2').innerHTML = humidity;
    document.getElementById('min_temp').innerHTML = `${min_tempC} °C`;
    document.getElementById('max_temp').innerHTML = `${max_tempC} °C`;
    document.getElementById('wind_speed').innerHTML = wind_speed;
    document.getElementById('wind_speed2').innerHTML = wind_speed;
    document.getElementById('wind_degrees').innerHTML = wind_degrees;
    document.getElementById('sunrise').innerHTML = new Date(sunrise * 1000).toLocaleTimeString();
    document.getElementById('sunset').innerHTML = new Date(sunset * 1000).toLocaleTimeString();
    document.getElementById('city_display').innerHTML = city_name;

  } catch (error) {
    console.error(error);
  }
}

document.getElementById('submit').addEventListener("click", (e) => {
  e.preventDefault();
  const city_name = document.getElementById('city_input').value;
  fetchWeather(city_name);
});

// Optionally fetch weather for Bihar on page load
fetchWeather("Patna");




// for Delhi
async function fetchWeather1() {
    try {
      const response = await fetch('https://weather-api138.p.rapidapi.com/weather?city_name=Delhi', options);
      const result = await response.json();
  
      console.log(result);
  
      // Accessing the required data from the JSON response
      const tempK = result.main.temp;
      const feels_likeK = result.main.feels_like;
      const humidity = result.main.humidity;
      const min_tempK = result.main.temp_min;
      const max_tempK = result.main.temp_max;
      const wind_speed = result.wind.speed;
      const wind_degrees = result.wind.deg;
      const sunrise = result.sys.sunrise;
      const sunset = result.sys.sunset;
  
      // Convert temperatures to Celsius
      const tempC = (tempK - 273.15).toFixed(2);
      const feels_likeC = (feels_likeK - 273.15).toFixed(2);
      const min_tempC = (min_tempK - 273.15).toFixed(2);
      const max_tempC = (max_tempK - 273.15).toFixed(2);
  
  
      // Updating the HTML elements with Celsius values
      document.getElementById('temp3').innerHTML = `${tempC} °C`;
      document.getElementById('feels_like3').innerHTML = `${feels_likeC} °C`;
      document.getElementById('humidity3').innerHTML = humidity;
      document.getElementById('min_temp3').innerHTML = `${min_tempC} °C`;
      document.getElementById('max_temp3').innerHTML = `${max_tempC} °C`;
      document.getElementById('wind_speed3').innerHTML = wind_speed;
      document.getElementById('wind_degrees3').innerHTML = wind_degrees;
      document.getElementById('sunrise3').innerHTML = new Date(sunrise * 1000).toLocaleTimeString();
      document.getElementById('sunset3').innerHTML = new Date(sunset * 1000).toLocaleTimeString();
  
    } catch (error) {
      console.error(error);
    }
  }

  fetchWeather1()


  // for Mumbai
  async function fetchWeather2() {
    try {
      const response = await fetch('https://weather-api138.p.rapidapi.com/weather?city_name=Mumbai', options);
      const result = await response.json();
  
      console.log(result);
  
      // Accessing the required data from the JSON response
      const tempK = result.main.temp;
      const feels_likeK = result.main.feels_like;
      const humidity = result.main.humidity;
      const min_tempK = result.main.temp_min;
      const max_tempK = result.main.temp_max;
      const wind_speed = result.wind.speed;
      const wind_degrees = result.wind.deg;
      const sunrise = result.sys.sunrise;
      const sunset = result.sys.sunset;
  
      // Convert temperatures to Celsius
      const tempC = (tempK - 273.15).toFixed(2);
      const feels_likeC = (feels_likeK - 273.15).toFixed(2);
      const min_tempC = (min_tempK - 273.15).toFixed(2);
      const max_tempC = (max_tempK - 273.15).toFixed(2);
  
  
      // Updating the HTML elements with Celsius values
      document.getElementById('temp4').innerHTML = `${tempC} °C`;
      document.getElementById('feels_like4').innerHTML = `${feels_likeC} °C`;
      document.getElementById('humidity4').innerHTML = humidity;
      document.getElementById('min_temp4').innerHTML = `${min_tempC} °C`;
      document.getElementById('max_temp4').innerHTML = `${max_tempC} °C`;
      document.getElementById('wind_speed4').innerHTML = wind_speed;
      document.getElementById('wind_degrees4').innerHTML = wind_degrees;
      document.getElementById('sunrise4').innerHTML = new Date(sunrise * 1000).toLocaleTimeString();
      document.getElementById('sunset4').innerHTML = new Date(sunset * 1000).toLocaleTimeString();
  
    } catch (error) {
      console.error(error);
    }
  }

  fetchWeather2()


  // for Kolkata
async function fetchWeather3() {
    try {
      const response = await fetch('https://weather-api138.p.rapidapi.com/weather?city_name=kolkata', options);
      const result = await response.json();
  
      console.log(result);
  
      // Accessing the required data from the JSON response
      const tempK = result.main.temp;
      const feels_likeK = result.main.feels_like;
      const humidity = result.main.humidity;
      const min_tempK = result.main.temp_min;
      const max_tempK = result.main.temp_max;
      const wind_speed = result.wind.speed;
      const wind_degrees = result.wind.deg;
      const sunrise = result.sys.sunrise;
      const sunset = result.sys.sunset;
  
      // Convert temperatures to Celsius
      const tempC = (tempK - 273.15).toFixed(2);
      const feels_likeC = (feels_likeK - 273.15).toFixed(2);
      const min_tempC = (min_tempK - 273.15).toFixed(2);
      const max_tempC = (max_tempK - 273.15).toFixed(2);
  
  
      // Updating the HTML elements with Celsius values
      document.getElementById('temp5').innerHTML = `${tempC} °C`;
      document.getElementById('feels_like5').innerHTML = `${feels_likeC} °C`;
      document.getElementById('humidity5').innerHTML = humidity;
      document.getElementById('min_temp5').innerHTML = `${min_tempC} °C`;
      document.getElementById('max_temp5').innerHTML = `${max_tempC} °C`;
      document.getElementById('wind_speed5').innerHTML = wind_speed;
      document.getElementById('wind_degrees5').innerHTML = wind_degrees;
      document.getElementById('sunrise5').innerHTML = new Date(sunrise * 1000).toLocaleTimeString();
      document.getElementById('sunset5').innerHTML = new Date(sunset * 1000).toLocaleTimeString();
  
    } catch (error) {
      console.error(error);
    }
  }

  fetchWeather3()


