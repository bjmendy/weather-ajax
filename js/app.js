var zip = prompt("enter zip code")

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  fail: function(error){
	console.log(error)
  }
});

var heading = document.createElement("h1");
heading.setAttribute("id", "London");

// // Use the response to display the current temperature in fahrenheit,
// the high and low temperate in fahrenheit, the current weather "description",
// and the name of the city that came back from the API

// // Spend a little time styling the app. Here's some inspiration
// (Don't worry about the lens flare!) 

var array = ajax.url
var currentTemperature = array.data.temp

function changeTemperature(temperature){
	var parent = document.getElementByTagName("temperature");
	parent.getElementByTagName.data.temp;
},

var fahrenheit = currentTemperature.high;

//found from weatherjs.com//
Weather.getCurrent("London", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});

Weather.getForecast("London", function(forecast) {
  console.log("forecast high: " + forecast.high());
  console.log("forecast low: " + forecast.low());
});





