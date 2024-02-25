export default function presentWeatherData(filteredWeatherData) {
  const weatherContainer = document.getElementById('weather-container');
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');
  const location = document.createElement('h2');
  location.textContent = filteredWeatherData.location;
  const region = document.createElement('p');
  region.textContent = filteredWeatherData.region;
  const country = document.createElement('p');
  country.textContent = filteredWeatherData.country;
  const temperature = document.createElement('p');
  temperature.textContent = `${filteredWeatherData.temperature}°C`;
  const condition = document.createElement('p');
  condition.textContent = filteredWeatherData.condition;
  const icon = document.createElement('img');
  icon.src = filteredWeatherData.icon;
  weatherCard.appendChild(location);
  weatherCard.appendChild(region);
  weatherCard.appendChild(country);
  weatherCard.appendChild(temperature);
  weatherCard.appendChild(condition);
  weatherCard.appendChild(icon);
  weatherContainer.prepend(weatherCard);
}
