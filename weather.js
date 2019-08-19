class Weather {
    constructor(city, state) {
        this.apiKey = '99dfe35fcb7d1ee';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from api 
    async getWeather() {
        const response = await fetch(`http:/api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.state}.json`);

        const data = await response.json();

        return data.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}