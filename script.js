async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'ace9d8d5bdc6dccdcbf359cc9fdfc5b6'; // <-- Replace this!
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `${data.main.temp} °C`;
      document.getElementById('condition').textContent = data.weather[0].description;
      document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
      document.getElementById('weatherInfo').classList.remove('hidden');
    } catch (error) {
      alert("Error fetching weather: " + error.message);
    }
  }
  