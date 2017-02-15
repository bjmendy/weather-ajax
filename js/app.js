// //////////WEATHER APP////////UPDATED BELOW!!!!////
// var zip = prompt("enter zip code")

// $.ajax({
//   url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=052f26926ae9784c2d677ca7bc5dec98',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   },
//   fail: function(error){
// 	console.log(error)
//   }
// });

// var heading = document.createElement("h1");
// heading.setAttribute("id", "Chicago");

// // // Use the response to display the current temperature in fahrenheit,
// // the high and low temperate in fahrenheit, the current weather "description",
// // and the name of the city that came back from the API

// // // Spend a little time styling the app. Here's some inspiration
// // (Don't worry about the lens flare!) 

// var array = ajax.url
// var currentTemperature = array.data.temp

// function changeTemperature(temperature){
// 	var parent = document.getElementByTagName("temperature");
// 	parent.getElementByTagName.data.temp;
// },

// var fahrenheit = currentTemperature.high;

// //found from weatherjs.com//
// Weather.getCurrent("London", function(current) {
//   console.log(
//     ["currently:",current.temperature(),"and",current.conditions()].join(" ")
//   );
// });

// Weather.getForecast("London", function(forecast) {
//   console.log("forecast high: " + forecast.high());
//   console.log("forecast low: " + forecast.low());
// });

//////////WEATHER APP////////UPDATED BELOW!!!!////


var zip = prompt("enter zip code");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  fail: function(error){
	console.log(error)
  }
});

$('body').append('<p>' + data.main.name + 'Today: ' + data.weather[0].description + '</p>' + '<br>');
$('#weather').prepend('<img id="weatherIcon" src="http://files.softicons.com/download/web-icons/android-weather-icons-by-bharath-prabhuswamy/png/256x256/Sunny.png"/>')
$('body').append('<p>' + data.main.temp_min + ' - ' + data.main.temp + ' - ' + data.main.temp_max + '</p>' + '<br>');


