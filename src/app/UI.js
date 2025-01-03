export class UI {
    constructor() {
        this.location = document.getElementById('weather-location')
        this.desc = document.getElementById('weather-description')
        this.string = document.getElementById('weather-string')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
        this.img = document.getElementById('weather-img')
    }

    render(weather){
       /*  this.location.textContent = weather.name + '/' + weather.sys.country; */
       this.location.textContent = weather.name + '/' + weather.sys.country
       this.img.src = `https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`
       this.desc.textContent =  weather.weather[0]['description']
       this.string.textContent = weather.main.temp + ' °C'
       this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%'
       this.wind.textContent = 'Wind: '  + weather.wind.speed + ' m/s'
    }
}