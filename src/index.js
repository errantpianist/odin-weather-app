import './style.css';
import getWeather from './getWeather';
import filterWeatherData from './filterWeatherData';
import presentWeatherData from './presentWeatherData';

const contentContainer = document.getElementById('content');
const testContent = document.createElement('p');
const weatherData = await getWeather('London');
const filteredData = filterWeatherData(weatherData);
presentWeatherData(filteredData);

console.log(filteredData);
