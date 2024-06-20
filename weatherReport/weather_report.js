


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function showweatherDetails(event) {
    event.preventDefault();


    const city = document.getElementById('city').value;
    const apiKey = '524e2fe3dd4e46e9c843f62bf1cb280b'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
                            
})
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
}
function showweatherDetailsByLatLong(event) {
    event.preventDefault();


    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const apiKey = '524e2fe3dd4e46e9c843f62bf1cb280b'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrlLatLong = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key}`;

    fetch(apiUrlLatLong)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
                            
})
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);
 document.getElementById('weatherForm').addEventListener('submitLatLong',showweatherDetailsByLatLong );