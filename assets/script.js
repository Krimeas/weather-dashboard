//Fetch Data
//Search function shoudl save city names.
// city names shoudl remain on the left side for clicking and reloading from local storage.
//variables need to add data to html when search is hit.
// need lat and lon variable - need to pull lat and lon and put into the city name variable when a city name is typed in.

//posts date for the five days forecast.
var oneDate = moment().add(1, 'days').format("M/D/YYYY");
$("#day1").text("(" + oneDate + ")");
var twoDate = moment().add(2, 'days').format("M/D/YYYY");
$("#day2").text("(" + twoDate + ")");
var threeDate = moment().add(3, 'days').format("M/D/YYYY");
$("#day3").text("(" + threeDate + ")");
var fourDate = moment().add(4, 'days').format("M/D/YYYY");
$("#day4").text("(" + fourDate + ")");
var fiveDate = moment().add(5, 'days').format("M/D/YYYY");
$("#day5").text("(" + fiveDate + ")");

//Sets API key and variables for the pushed previous searches.
var APIkey = "b8f205c7b5d3ff424774477d455341bc";
var formEl = $('#citySearch');
var cityListEl = $('#city-list');

document.querySelector("#subbtn").addEventListener("click", submitForm);

// function to run the submit button and pull API data from openweather.
function submitForm(event) {
  event.preventDefault();
  var cityNameEl = $('#city-name');
  nameInput = cityNameEl.val();
  logCity(nameInput);

  var todaysDate = moment("2021-06-15").format("M/D/YYYY");
  $("#today").text("(" + todaysDate + ")");



  var queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q=" + nameInput + "&appid=" + APIkey;
  var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + nameInput + "&appid=" + APIkey;
  // var latnlon = 'http://api.openweathermap.org/geo/1.0/direct?q=' + nameInput + '&limit=5&appid=' + APIkey;
  // var citylatnlon = latnlon;



// for the current forecast of the day
  fetch(queryURL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  localStorage.setItem("queryURL1", JSON.stringify(queryURL1))

  function daycurrent (data){
    var tempcurrent = data.main.temp;

    console.log(tempcurrent);
    var windcurrent = data.wind.speed;

    console.log(windcurrent);
    var humiditycurrent =  data.main.humidity;

    console.log(humiditycurrent);
    var citycurrent =  data.name;
    $("#city").text(citycurrent);
    console.log(citycurrent);
  }



// For the 5 day forecast - currently unable to due to paywall.  
// possible to generate arrays for 
  fetch(queryURL2, {

    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    localStorage.setItem("queryURL2", JSON.stringify(queryURL2))

    function dayAhead (data){
    var tempforecast1 = data.list[5].main.temp;
    console.log(tempforecast1);
    var windforecast1 = data.list[5].wind.speed;
    console.log(windforecast1);
    var humidityforecast1 =  data.list[5].main.humidity;
    console.log(humidityforecast1);

    var tempforecast2 = data.list[13].main.temp;
    console.log(tempforecast2);
    var windforecast2 = data.list[13].wind.speed;
    console.log(windforecast2);
    var humidityforecast2 =  data.list[13].main.humidity;
    console.log(humidityforecast2);

    var tempforecast3 = data.list[21].main.temp;
    console.log(tempforecast3);
    var windforecast3 = data.list[21].wind.speed;
    console.log(windforecast3);
    var humidityforecast3 =  data.list[21].main.humidity;
    console.log(humidityforecast3);

    var tempforecast4 = data.list[29].main.temp;
    console.log(tempforecast4);
    var windforecast4 = data.list[29].wind.speed;
    console.log(windforecast4);
    var humidityforecast4 =  data.list[29].main.humidity;
    console.log(humidityforecast4);

    var tempforecast5 = data.list[37].main.temp;
    console.log(tempforecast5);
    var windforecast5 = data.list[37].wind.speed;
    console.log(windforecast5);
    var humidityforecast5 =  data.list[37].main.humidity;
    console.log(humidityforecast5);
    }
};



///////////////////////////////////////
var logCity = function (name) {
  var listEl = $('<li>');

  var listDetail = name;

  listEl.addClass('list-group-item').text(listDetail);

  listEl.appendTo(cityListEl);
  
};

//////////////////////
// data pulled for current forecast - plugged into class - todaysCast


const restorequeryURL1 = JSON.parse(localStorage.getItem("queryURL1"));

///////////////////////
//data pulled for five day forecast  - plugged into class - fiveDaysCast


const restorequeryURL2 = JSON.parse(localStorage.getItem("queryURL2"));
