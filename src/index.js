import './style.css';
import handleClick from './handleClick';

const getWeatherBtn = document.getElementById('get-weather-btn');
const locationInput = document.getElementById('location-input');
const clearResultsBtn = document.getElementById('clear-results-btn');
getWeatherBtn.addEventListener('click', handleClick);
locationInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleClick();
    locationInput.value = '';
  }
});

clearResultsBtn.addEventListener('click', () => {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = '';
  clearResultsBtn.classList.add('hidden');
});
