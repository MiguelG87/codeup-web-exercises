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
        const date1 = data.list[1].dt_txt.split(' ')[0];
        const formattedDate1 = new Date(date1).toLocaleDateString('en-US');
        const temperature1 = data.list[1].main.temp.toFixed(1);
        const weatherCode1 = data.list[1].weather[0].icon;
        const weatherDescription1 = data.list[1].weather[0].description;
        const capitalizedWeatherDescription1 = weatherDescription1.charAt(0).toUpperCase() + weatherDescription1.slice(1);
        const humidity1 = data.list[1].main.humidity;
        const wind1 = data.list[1].wind.speed;
        const pressure1 = data.list[1].main.pressure;
        console.log('5 day forecast', data);
        $('#date1').html(`Date: ${formattedDate1}`);
        $('#weather1').html(`Temperature: ${temperature1} &deg;F`);
        $('#weatherCode1').html(`<img src="http://openweathermap.org/img/w/${weatherCode1}.png" >`);
        $('#description1').html(`Weather: ${capitalizedWeatherDescription1}`);
        $('#humidity1').html(`Humidity: ${humidity1} %`);
        $('#wind1').html(`Wind: ${wind1} mph`);
        $('#pressure1').html(`Pressure: ${pressure1} Hg`);
        //<--------------------------- Second Day-------------------------------->
        const date2 = data.list[9].dt_txt.split(' ')[0];
        const formattedDate2 = new Date(date2).toLocaleDateString('en-US');
        const temperature2 = data.list[9].main.temp.toFixed(1);
        const weatherDescription2 = data.list[9].weather[0].description;
        const capitalizedWeatherDescription2 = weatherDescription2.charAt(0).toUpperCase() + weatherDescription2.slice(1);
        const weatherCode2 = data.list[9].weather[0].icon;
        const humidity2 = data.list[9].main.humidity;
        const wind2 = data.list[9].wind.speed;
        const pressure2 = data.list[9].main.pressure;
        $('#date2').html(`Date: ${formattedDate2}`);
        $('#weather2').html(`Temperature: ${temperature2} &deg;F`);
        $('#weatherCode2').html(`<img src="http://openweathermap.org/img/w/${weatherCode2}.png" >`);
        $('#description2').html(`Weather: ${capitalizedWeatherDescription2}`);
        $('#humidity2').html(`Humidity: ${humidity2} %`);
        $('#wind2').html(`Wind: ${wind2} mph`);
        $('#pressure2').html(`Pressure: ${pressure2} Hg`);
        //<--------------------------- Third Day-------------------------------->
        const date3 = data.list[17].dt_txt.split(' ')[0];
        const formattedDate3 = new Date(date3).toLocaleDateString('en-US');
        const temperature3 = data.list[17].main.temp.toFixed(1);
        const weatherCode3 = data.list[17].weather[0].icon;
        const weatherDescription3 = data.list[17].weather[0].description;
        const capitalizedWeatherDescription3 = weatherDescription3.charAt(0).toUpperCase() + weatherDescription3.slice(1);
        const humidity3 = data.list[17].main.humidity;
        const wind3 = data.list[17].wind.speed;
        const pressure3 = data.list[17].main.pressure;
        $('#date3').html(`Date: ${formattedDate3}`);
        $('#weather3').html(`Temperature: ${temperature3} &deg;F`);
        $('#weatherCode3').html(`<img src="http://openweathermap.org/img/w/${weatherCode3}.png" >`);
        $('#description3').html(`Weather: ${capitalizedWeatherDescription3}`);
        $('#humidity3').html(`Humidity: ${humidity3} %`);
        $('#wind3').html(`Wind: ${wind3} mph`);
        $('#pressure3').html(`Pressure: ${pressure3} Hg`);
        //<--------------------------- Fourth Day-------------------------------->
        const date4 = data.list[25].dt_txt.split(' ')[0];
        const formattedDate4 = new Date(date4).toLocaleDateString('en-US');
        const temperature4 = data.list[25].main.temp.toFixed(1);
        const weatherCode4 = data.list[25].weather[0].icon;
        const weatherDescription4 = data.list[25].weather[0].description;
        const capitalizedWeatherDescription4 = weatherDescription4.charAt(0).toUpperCase() + weatherDescription4.slice(1);
        const humidity4 = data.list[25].main.humidity;
        const wind4 = data.list[25].wind.speed;
        const pressure4 = data.list[25].main.pressure;
        $('#date4').html(`Date: ${formattedDate4}`);
        $('#weather4').html(`Temperature: ${temperature4} &deg;F`);
        $('#weatherCode4').html(`<img src="http://openweathermap.org/img/w/${weatherCode4}.png" >`);
        $('#description4').html(`Weather: ${capitalizedWeatherDescription4}`);
        $('#humidity4').html(`Humidity: ${humidity4} %`);
        $('#wind4').html(`Wind: ${wind4} mph`);
        $('#pressure4').html(`Pressure: ${pressure4} Hg`);
        //<--------------------------- Fifth Day-------------------------------->
        const date5 = data.list[33].dt_txt.split(' ')[0];
        const formattedDate5 = new Date(date5).toLocaleDateString('en-US');
        const temperature5 = data.list[33].main.temp.toFixed(1);
        const weatherCode5 = data.list[33].weather[0].icon;
        const weatherDescription5 = data.list[33].weather[0].description;
        const capitalizedWeatherDescription5 = weatherDescription5.charAt(0).toUpperCase() + weatherDescription5.slice(1);
        const humidity5 = data.list[33].main.humidity;
        const wind5 = data.list[33].wind.speed;
        const pressure5 = data.list[33].main.pressure;
        $('#date5').html(`Date: ${formattedDate5}`);
        $('#weather5').html(`Temperature: ${temperature5} &deg;F`);
        $('#weatherCode5').html(`<img src="http://openweathermap.org/img/w/${weatherCode5}.png" >`);
        $('#description5').html(`Weather: ${capitalizedWeatherDescription5}`);
        $('#humidity5').html(`Humidity: ${humidity5} %`);
        $('#wind5').html(`Wind: ${wind5} mph`);
        $('#pressure5').html(`Pressure: ${pressure5} Hg`);
    });
}