
function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  
  const paris = document.getElementById("paris");
  let image2 = document.createElement("img");
  paris.appendChild(image2);
  image2.src = 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900'
  image2.style.height = '160px';
  image2.style.width = '130px';
  image2.id = 'paris_pic';
  let parisP = document.getElementById("paris_p"); // p means <p> tag
   let parisWeather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=22fe714020fda5e1b1931cc750b203ae`).then(displayWeatherInfoParis);
   function displayWeatherInfoParis(response) {
    parisP.innerHTML = `Today in Paris ${Math.round(response.data.main.temp)}°`
  }
  const newYork = document.getElementById("new-york");
  let cities = document.getElementById("cities");
  cities.appendChild(newYork);
  let image1 = document.createElement("img");
  newYork.appendChild(image1);
  image1.src = 'https://www.travelguide.net/media/new-york.jpeg';
  image1.style.height = '160px';
  image1.style.width = '130px';
  image1.id = 'new_york_pic'
  let newYorkP = document.getElementById("new-york_p");
   let newYorkWeather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=new&york&units=metric&appid=22fe714020fda5e1b1931cc750b203ae`).then(displayWeatherInfoNewYork);
   function displayWeatherInfoNewYork(response) {
    newYorkP.innerHTML = `Today in New York ${Math.round(response.data.main.temp)}°`
  }
  let london = document.getElementById("london");
  let image3 = document.createElement("img");
  cities.appendChild(london);
  london.appendChild(image3);
  image3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/800px-London_Big_Ben_Phone_box.jpg";
  image3.style.height = '160px';
  image3.style.width = '130px';
  image3.id = 'london_pic'
  let londonP = document.getElementById("london_p");
   let londonWeather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=22fe714020fda5e1b1931cc750b203ae`).then(displayWeatherInfoLondon);
   function displayWeatherInfoLondon(response) {
    londonP.innerHTML = `Today in London ${Math.round(response.data.main.temp)}°`
   }
  function formatDay(date) {
    const dayArray = date.getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return days[dayArray];
  }
  const currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = formatTime(new Date());
  const currentDay = document.querySelector("#current-day");
  currentDay.innerHTML = formatDay(new Date());
  function displayWeatherInfo(response) {
    document.querySelector("#searched-city").innerHTML = response.data.name;
    const temperature = Math.round(response.data.main.temp);
    document.querySelector("#current-temperature").innerHTML = `${temperature}°`;
    const humidity = response.data.main.humidity;
    document.querySelector("#humidity").innerHTML = `${humidity}%`;
    const windSpeed = Math.round(response.data.wind.speed);
    document.querySelector("#wind").innerHTML = `${windSpeed} km/h`;
    document.querySelector("#weather-type").innerHTML = response.data.weather[0].main;
  }
  function searchCity(city) {
    const apiKey = "22fe714020fda5e1b1931cc750b203ae";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherInfo);
  
  
  }
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
  
    if (/^[A-Za-z\s]+$/.test(city)) {
        searchCity(city);
        document.querySelector('#search-input').value = '';
    } else {
        alert("Please enter valid city name (letters only).");
        document.querySelector('#search-input').value = '';
    }
  }
  const searchBar = document.querySelector("#search-form");
  searchBar.addEventListener("submit", handleSubmit);