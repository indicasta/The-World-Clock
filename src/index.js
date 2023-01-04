let cityFlags = {
  Paris: ["🇫🇷", "Europe/Paris"],
  LA: ["🇺🇸", "America/Los_Angeles"],
  Sydney: ["🇦🇺", "Australia/Sydney"],
  Barcelona: ["🇪🇸", "Europe/Madrid"],
  Havana: ["🇨🇺", "America/Havana"],
  London: ["🇬🇧", "Europe/London"],
  Tokyo: ["🇯🇵", "Asia/Tokyo"],
  NewYork: ["🇺🇸", "America/New_York"],
};
let globalIndex = 0;
function updateMainCity(event) {
  let city = event.target.value;
  let cities = Object.keys(cityFlags);
  if (city === "New York") city = "NewYork";
  else if (city === "Los Angeles") city = "LA";
  if (cities.indexOf(city) !== -1) globalIndex = cities.indexOf(city);
  else globalIndex = 0;
  updateTime();
}
function populateSelect() {
  let cities = Object.keys(cityFlags);
  let selectHTML = `<option value="">Choose City</option>`;
  cities.forEach((city) => {
    if (city === "LA") cityName = "Los Angeles";
    else if (city === "NewYork") cityName = "New York";
    else {
      cityName = city;
    }
    selectHTML += `<option value=${city}>${cityName}</option>`;
  });
  document.getElementById("cities").innerHTML = selectHTML;
}
function updateTime() {
  let cities = Object.keys(cityFlags);
  let cityInfoHTML = `<div class="row">`;
  let index = globalIndex;
  for (var i = 0; i < 3; i++) {
    if (index + i < cities.length) {
      city = cities[index + i];
    } else {
      city = cities[0];
      index = -2 + (i % 2);
    }
    if (city === "LA") cityName = "Los Angeles";
    else if (city === "NewYork") cityName = "New York";
    else {
      cityName = city;
    }
    let cityTime = moment().tz(`${cityFlags[city][1]}`);
    let date = cityTime.format("MMMM Do YYYY");
    let time = cityTime.format("hh:mm:ss [<small>]A[</small>]");
    cityInfoHTML =
      cityInfoHTML +
      ` <div class="city">
            <div>
              <h2>${cityName} ${cityFlags[city][0]}</h2>
              <div class="date">${date}</div>
            </div>
            <div class="time">${time}</div> </div>`;
  }
  document.getElementById("info").innerHTML = cityInfoHTML + `</div>`;
}

populateSelect();
updateTime(globalIndex);
setInterval(updateTime, 1000);
document.getElementById("cities").addEventListener("change", updateMainCity);
