export default async function getWeather(location) {
  location = location.toLowerCase();
  const api_key = '9163a5b7d3c7495ca4a232649231812';

  try {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}`,
      {
        mode: 'cors',
      }
    );
    const weatherData = await data.json();
    return weatherData;
  } catch (error) {
    alert('An error occurred while fetching weather data. Please try again.');
  }
}
