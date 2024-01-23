let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let citiesElement = document.querySelector("#cities");
let intervalId; // Variable to store the interval ID

function displayTime(timeZone) {
  let date = moment().tz(timeZone);

  //get hours, minutes, secs from date
  let hh = date.hours();
  let mm = date.minutes();
  let ss = date.seconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

function showSelectedCountry() {
  // Clear the existing interval before setting a new one
  clearInterval(intervalId);

  if (citiesElement.value.length > 0) {
    let currentTime = moment()
      .tz(citiesElement.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    let infoCurrentTime = document.querySelector("#info-current-time");
    infoCurrentTime.innerHTML = `It is ${currentTime} in ${citiesElement.value}`;

    // Update the analog clock based on the selected city's time zone
    displayTime(citiesElement.value);

    // Set a new interval for the selected city
    intervalId = setInterval(() => displayTime(citiesElement.value), 1000);
  } else {
    // If no city is selected, show the local time on the clock and infoCurrentTime
    let localTime = moment().format(" h:mm A");

    let infoCurrentTime = document.querySelector("#info-current-time");
    infoCurrentTime.innerHTML = `
            <div class="local-time"> Current Time: <span>${localTime}</span></div>
            <div class="local-date">Current date <span>${moment().format(
              "MMMM D, YYYY."
            )}</span></div>
            <div class="day-of-the-week">Day of the week: <span>${moment().format(
              "dddd"
            )}.</span></div>
            <div class="region">Region: <span> ${moment.tz.guess()}.</span></div>`;

    // Update the analog clock based on the local time
    displayTime(moment.tz.guess());

    // Set a new interval for the local time
    intervalId = setInterval(() => displayTime(moment.tz.guess()), 1000);
  }
}

function updateTime() {
  //Portland//
  let portandElement = document.querySelector("#portland");
  let portlandDateElement = portandElement.querySelector(".date");
  let portlandHourElement = portandElement.querySelector(".hour");
  let portlandMinutesElement = portandElement.querySelector(".minute");
  let portlandSecsElement = portandElement.querySelector(".seconds");
  portlandDateElement.innerHTML = moment().format("dddd, MMMM D, YYYY ");
  portlandHourElement.innerHTML = moment().format("h");
  portlandMinutesElement.innerHTML = moment().format("mm");
  portlandSecsElement.innerHTML = `${moment().format("ss")} 
  <span class="am-pm">
  ${moment().format("a")}
  </span> `;

  //Sao Paulo//
  let saoPauloElement = document.querySelector("#saopaulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloHourElement = saoPauloElement.querySelector(".hour");
  let saoPauloMinutesElement = saoPauloElement.querySelector(".minute");
  let saoPauloSecsElement = saoPauloElement.querySelector(".seconds");
  saoPauloDateElement.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("dddd, MMMM D, YYYY ");
  saoPauloHourElement.innerHTML = moment().tz("America/Sao_Paulo").format("h");
  saoPauloMinutesElement.innerHTML = moment().format("mm");
  saoPauloSecsElement.innerHTML = `${moment().format("ss")} 
  <span class="am-pm">
  ${moment().tz("America/Sao_Paulo").format("a")}
  </span> `;

  //London//
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonHourElement = londonElement.querySelector(".hour");
  let londonMinutesElement = londonElement.querySelector(".minute");
  let londonSecsElement = londonElement.querySelector(".seconds");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, MMMM D, YYYY ");
  londonHourElement.innerHTML = moment().tz("Europe/London").format("h");
  londonMinutesElement.innerHTML = moment().format("mm");
  londonSecsElement.innerHTML = `${moment().format("ss")} 
  <span class="am-pm">
  ${moment().tz("Europe/London").format("a")}
  </span> `;

  //London//
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoHourElement = tokyoElement.querySelector(".hour");
  let tokyoMinutesElement = tokyoElement.querySelector(".minute");
  let tokyoSecsElement = tokyoElement.querySelector(".seconds");
  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D, YYYY ");
  tokyoHourElement.innerHTML = moment().tz("Asia/Tokyo").format("h");
  tokyoMinutesElement.innerHTML = moment().format("mm");
  tokyoSecsElement.innerHTML = `${moment().format("ss")} 
  <span class="am-pm">
  ${moment().tz("Asia/Tokyo").format("a")}
  </span> `;
}

updateTime();
setInterval(updateTime, 1000);

// Call showSelectedCountry on page load
document.addEventListener("DOMContentLoaded", showSelectedCountry);

// Add an event listener for the city selection
citiesElement.addEventListener("change", showSelectedCountry);
