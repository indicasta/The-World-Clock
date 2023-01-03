let cityFlags = {
  Paris: ["🇫🇷", "Europe/Paris"],
  LA: ["🇺🇸", "America/Los_Angeles"],
  Sydney: ["🇦🇺", "Australia/Sydney"],
  Barcelona: ["🇪🇸", "Europe/Madrid"],
  Havana: ["🇨🇺", "America/Havana"],
  London: ["🇬🇧", "Europe/London"],
};
function updateTime() {
  let cities = Object.keys(cityFlags);
  let cityInfoHTML = `<div class="row">`;
  cities.forEach((city, index) => {
    if (city === "LA") cityName = "Los Angeles";
    else {
      cityName = city;
    }
    if (index < 3) {
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
  });
}

updateTime();
setInterval(updateTime, 1000);
