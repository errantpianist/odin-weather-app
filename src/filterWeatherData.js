export default function filterWeatherData(weatherData) {
  if (weatherData.error) {
    alert('An error occurred while fetching weather data. Please try again.');
    return;
  }
  const filteredData = {
    location: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
    temperature: weatherData.current.temp_c,
    condition: weatherData.current.condition.text,
    icon: weatherData.current.condition.icon,
  };
  return filteredData;
}
