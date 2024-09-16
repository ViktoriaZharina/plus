let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let chooseCity = prompt("What city?");
chooseCity = chooseCity.toLowerCase();
if (weather[chooseCity] === undefined) {
  alert("try another source");
}

let temper = weather[chooseCity].temp;
let humidity = weather[chooseCity].humidity;
let celsiusTemper = Math.round(temper);

alert(
  `It is ${celsiusTemper}C in ${chooseCity} with a humidity of ${humidity}`
);
