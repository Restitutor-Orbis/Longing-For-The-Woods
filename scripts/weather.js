/* Weather class made by users:
* https://github.com/0-l
* https://github.com/Tomhet
* https://github.com/2huch
* https://github.com/kakolisgay
* https://github.com/Demonstrandum
*
* Taken from the startpage project https://github.com/0-l/dawn
* And modified by me
*/

var standardCity = "Copenhagen";
var weather = null;
var visible = false;

function initWeather() {
    var place;

    place = localStorage.place || standardCity;

    document.getElementById("weatherInput").placeholder = place;
    weather = new Weather(place);
    weather.getWeather;   
}

function weatherToggleOn() {
    document.getElementById("weatherInput").style.visibility = "visible";
    document.getElementById("weatherButton").style.width = 0;
    document.getElementById("weatherButton").style.color = "rgb(0,0,0,0)";
    visible = true;
}

function weatherToggleOff() {
    var refreshIntervalId = setInterval(toggleOff(refreshIntervalId), 1000);

    function toggleOff() {
        if(document.getElementById("weatherInput") !== document.activeElement) {
            document.getElementById("weatherInput").style.visibility = "hidden";
            document.getElementById("weatherButton").style.width = "auto";
            document.getElementById("weatherButton").style.color = "white";
            visible = false;
            clearInterval(refreshIntervalId);
        }
    }
}

function changeLocation(event) {
    if(event.key == "Enter") {
        var city = document.getElementById("weatherInput").value;

        //update the location of the weather
        //make sure the city is valid before editing local storage
        try {
            var weather = new Weather(city);
            weather.getWeather;
            document.getElementById("weatherInput").blur();
        }
        catch(error) {
            console.log(error);
            document.getElementById("weatherInput").value = "";
        }
    }
}
var tempCity;

class Weather {
    constructor(location) {
      this.location = location;
      tempCity = location;
    }
  
    get getWeather() {
      return this.fetchWeather(this.handleWeather);
    }
  
    handleWeather(res) {
      let temperature = Math.round(res.main.temp),
          weather     = res.weather[0].main,
          icon        = 'wb_sunny',
          color       = 'sunny';

          localStorage.place = tempCity;
          var city = localStorage.place;

          document.getElementById("weatherInput").placeholder = city;
          document.getElementById("weatherInput").value = "";
          document.getElementById("weatherButton").innerHTML = `${temperature}º` + " " + weather.toLowerCase();
          weatherToggleOff();
    }
  
    fetchWeather(callback) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`)
        .then(res  => res.json())
        .then(json => JSON.stringify(json))
        .then(json => JSON.parse(json))
        .then(data => callback(data))
        .catch(err => {
            console.log(err);
            document.getElementById("weatherInput").value = "";
            console.warn('Weather API returned an error.');
        });
    }
  }