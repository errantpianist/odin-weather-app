export default function presentWeatherData(filteredWeatherData) {
  const contentContainer = document.getElementById('content');
  const testContent = document.createElement('p');
  testContent.textContent = `The weather in ${filteredWeatherData.location}, ${filteredWeatherData.region}, ${filteredWeatherData.country} is ${filteredWeatherData.temperature}°C and ${filteredWeatherData.condition}`;
  contentContainer.appendChild(testContent);
}
