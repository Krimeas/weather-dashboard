//Fetch Data
//Search function shoudl save city names.
// city names shoudl remain on the left side for clicking and reloading from local storage.
//variables need to add data to html when search is hit.
// need lat and lon variable - need to pull lat and lon and put into the city name variable when a city name is typed in.


var oneDate = moment().add(1, 'days').format("M/D/YYYY");
$("#day1").text(oneDate);
var twoDate = moment().add(2, 'days').format("M/D/YYYY");
$("#day2").text(twoDate);
var threeDate = moment().add(3, 'days').format("M/D/YYYY");
$("#day3").text(threeDate);
var fourDate = moment().add(4, 'days').format("M/D/YYYY");
$("#day4").text(fourDate);
var fiveDate = moment().add(5, 'days').format("M/D/YYYY");
$("#day5").text(fiveDate);


var APIkey = "b8f205c7b5d3ff424774477d455341bc";
var formEl = $('#citySearch');
var cityListEl = $('#city-list');

document.querySelector("#subbtn").addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();

  var cityNameEl = $('#city-name');

  nameInput = cityNameEl.val();
  
  logCity(nameInput);
  console.log(nameInput);

var todaysDate = moment("2021-06-15").format("M/D/YYYY");
$("#today").text(todaysDate);



  var queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q=" + nameInput + "&appid=" + APIkey;
  // var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
  var latnlon = 'http://api.openweathermap.org/geo/1.0/direct?q=' + nameInput + '&limit=5&appid=' + APIkey;
  var citylatnlon = latnlon;

  var temp = 0;
  console.log(temp);
  var wind = 0;
  console.log(temp);
  var humidity =  0;
  console.log(temp);




// for the current forecast of the day
  fetch(queryURL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  localStorage.setItem("queryURL1", JSON.stringify(queryURL1))



// For the 5 day forecast - currently unable to due to paywall.  
// possible to generate arrays for 
  // fetch(queryURL2, {

  //   cache: 'reload',
  // })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });
  //   localStorage.setItem("queryURL2", JSON.stringify(queryURL2))

// };
}


///////////////////////////////////////
var logCity = function (name) {
  var listEl = $('<li>');

  var listDetail = name;

  listEl.addClass('list-group-item').text(listDetail);

  listEl.appendTo(cityListEl);
  
};

//////////////////////
// data pulled for current forecast - plugged into class - todaysCast


// const restorequeryURL1 = JSON.parse(localStorage.getItem("queryURL1"));

///////////////////////
//data pulled for five day forecast  - plugged into class - fiveDaysCast


// const restorequeryURL2 = JSON.parse(localStorage.getItem("queryURL2"));
