function updateTime() {
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss[<small>] A [</small>]"
    );
  }

  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");

    zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
    zurichTimeElement.innerHTML = zurichTime.format(
      "h:mm:ss [<small>]A[</small>]" //+ :SSS for milliseconds
    );
  }
}
updateTime();
setInterval(updateTime, 1000); //1 if we had only minutes

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

let selectCitiesElement = document.querySelector("#city");
selectCitiesElement.addEventListener("change", updateCity);
