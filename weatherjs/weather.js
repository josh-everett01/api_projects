class Weather {
  constructor(city, state) {
    this.apiKey = '4e703876b92d9fd2be814d16b22c6a22';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather From API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}