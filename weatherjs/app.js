// Init Weather Object
const weather = new Weather('burleson', 'texas');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

// weather.changeLocation('longmont', 'colorado');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}