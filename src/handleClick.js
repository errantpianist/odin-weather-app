import getWeather from './getWeather';
import filterWeatherData from './filterWeatherData';
import presentWeatherData from './presentWeatherData';

export default async function handleClick() {
  const clearResultsBtn = document.getElementById('clear-results-btn');
  const location = document.getElementById('location-input').value;
  const weatherData = await getWeather(location);
  const filteredData = filterWeatherData(weatherData);
  presentWeatherData(filteredData);
  clearResultsBtn.classList.remove('hidden');
}
