const MAPBOX_KEY = 'pk.eyJ1IjoibWlndWVsZzg3IiwiYSI6ImNsZnY4MTN3ejA0a3AzZHNhaGl2OHBwbGsifQ.xfYfNaoOoZnnp8-STalwCw';
const OPEN_WEATHER_APPID = "97c99a5135887b9f5adff84a7dba2ff2";
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            return data.features[0].center;
        });
}

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lat + "," + coordinates.lng + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            return data.query;
        })
}
function saveCoordinates(inputValue) {
    const [latitude, longitude] = inputValue.split(',');
    const coordinates = {
        lat: latitude,
        lng: longitude
    };
    return coordinates;
}
function updateMarkerCoordinates() {
    const lngLat = marker.getLngLat();
    const lng = lngLat.lng.toFixed(6);
    const lat = lngLat.lat.toFixed(6);
    $('#searchInput').html(`Longitude: ${lng}, Latitude: ${lat}`);
}


function displayWeatherData(latitude, longitude) {
    const apiKey = OPEN_WEATHER_APPID;
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`, function(data) {
        const currentCity = data.city.name;
        $('#currentCity').html(`Current Location: ${currentCity}`);
        //<--------------------------- First Day-------------------------------->
        const date1 = data.list[2].dt_txt
        const temperature1 = data.list[2].main.temp.toFixed(1);
        const weatherDescription1 = data.list[2].weather[0].description;
        const humidity1 = data.list[2].main.humidity;
        const wind1 = data.list[2].wind.speed;
        const pressure1 = data.list[2].main.pressure;
        console.log('5 day forecast', data);
        $('#date1').html(`Date: ${date1}`);
        $('#weather1').html(`Temperature: ${temperature1} &deg;F`);
        $('#description1').html(`Weather: ${weatherDescription1}`);
        $('#humidity1').html(`Humidity: ${humidity1} %`);
        $('#wind1').html(`Wind: ${wind1} mph`);
        $('#pressure1').html(`Pressure: ${pressure1} Hg`);
        //<--------------------------- Second Day-------------------------------->
        const date = data.list[10].dt_txt
        const temperature = data.list[10].main.temp.toFixed(1);
        const weatherDescription = data.list[10].weather[0].description;
        const humidity = data.list[10].main.humidity;
        const wind = data.list[10].wind.speed;
        const pressure = data.list[10].main.pressure;
        $('#date2').html(`Date: ${date}`);
        $('#weather2').html(`Temperature: ${temperature} &deg;F`);
        $('#description2').html(`Weather: ${weatherDescription}`);
        $('#humidity2').html(`Humidity: ${humidity} %`);
        $('#wind2').html(`Wind: ${wind} mph`);
        $('#pressure2').html(`Pressure: ${pressure} Hg`);
        //<--------------------------- Third Day-------------------------------->
        const date3 = data.list[10].dt_txt
        const temperature3 = data.list[10].main.temp.toFixed(1);
        const weatherDescription3 = data.list[10].weather[0].description;
        const humidity3 = data.list[10].main.humidity;
        const wind3 = data.list[10].wind.speed;
        const pressure3 = data.list[10].main.pressure;
        $('#date3').html(`Date: ${date3}`);
        $('#weather3').html(`Temperature: ${temperature3} &deg;F`);
        $('#description3').html(`Weather: ${weatherDescription3}`);
        $('#humidity3').html(`Humidity: ${humidity3} %`);
        $('#wind3').html(`Wind: ${wind3} mph`);
        $('#pressure3').html(`Pressure: ${pressure3} Hg`);
        //<--------------------------- Fourth Day-------------------------------->
        const date4 = data.list[10].dt_txt
        const temperature4 = data.list[10].main.temp.toFixed(1);
        const weatherDescription4 = data.list[10].weather[0].description;
        const humidity4 = data.list[10].main.humidity;
        const wind4 = data.list[10].wind.speed;
        const pressure4 = data.list[10].main.pressure;
        $('#date4').html(`Date: ${date}`);
        $('#weather4').html(`Temperature: ${temperature4} &deg;F`);
        $('#description4').html(`Weather: ${weatherDescription4}`);
        $('#humidity4').html(`Humidity: ${humidity4} %`);
        $('#wind4').html(`Wind: ${wind4} mph`);
        $('#pressure4').html(`Pressure: ${pressure4} Hg`);
        //<--------------------------- Fifth Day-------------------------------->
        const date5 = data.list[10].dt_txt
        const temperature5 = data.list[10].main.temp.toFixed(1);
        const weatherDescription5 = data.list[10].weather[0].description;
        const humidity5 = data.list[10].main.humidity;
        const wind5 = data.list[10].wind.speed;
        const pressure5 = data.list[10].main.pressure;
        $('#date5').html(`Date: ${date5}`);
        $('#weather5').html(`Temperature: ${temperature5} &deg;F`);
        $('#description5').html(`Weather: ${weatherDescription5}`);
        $('#humidity5').html(`Humidity: ${humidity5} %`);
        $('#wind5').html(`Wind: ${wind5} mph`);
        $('#pressure5').html(`Pressure: ${pressure5} Hg`);
    });
}