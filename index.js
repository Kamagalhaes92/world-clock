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
    let currentTime = moment().tz(citiesElement.value).format("h:mm A");

    let infoCurrentTime = document.querySelector("#info-current-time");
    infoCurrentTime.innerHTML = `<div class="local-time"> Current Time: <span>${currentTime}</span></div>
            <div class="local-date">Current date <span>${moment()
              .tz(citiesElement.value)
              .format("MMMM D, YYYY.")}</span></div>
            <div class="day-of-the-week">Day of the week: <span>${moment()
              .tz(citiesElement.value)
              .format("dddd")}.</span></div>
            <div class="region">Region: <span> ${
              citiesElement.value
            }.</span></div>`;

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

let citiesinfoElement = document.querySelector("#cities");
let cityInfoContainer = document.querySelector("#city-info-container");
let cityInfoText = document.querySelector("#city-info-text");
let goBackButton = document.querySelector("#go-back-button");

function showCityInfo(city) {
  // Hide the cities container and show the city info container
  document.querySelector(".cities-container").style.display = "none";
  cityInfoContainer.style.display = "block";

  // Set the detailed information based on the selected city

  if (city === "Europe/Athens") {
    cityInfoText.textContent = `${"Athens is Europe’s oldest capital. Records show the city’s origins go back to around 3,400 years ago, also making it one of the oldest cities in the world. Having been inhabited for over 4,000 years, Athens has been submitted to nearly every form of government known to this day: monarchy, democracy, socialism, capitalism, even communism"}`;
  } else if (city === "America/Cancun") {
    cityInfoText.textContent =
      "Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, numerous resorts and nightlife. It’s composed of 2 distinct areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long, beachfront strip of high-rise hotels, nightclubs, shops and restaurants. Cancun is also a famed destination for students during universities’ spring break period.";
  } else if (city === "America/Lima") {
    cityInfoText.textContent = `{"The city of Cusco, Peru is currently known as the cultural capital of the country, but its significant history goes back much further. As the oldest living city in the Americas, Cusco has been inhabited continuously for over 3,000 years. It was the historic capital of the Inca Empire from the 13th to 16th century until Spanish conquest, and now is a major tourist destination- receiving nearly 2 million visitors per year."}`;
  } else if (city === "Asia/Istanbul") {
    cityInfoText.textContent = `${"Istanbul, formerly known as Constantinople, has a rich history that spans over 2,500 years. It was the capital of both the Byzantine and Ottoman empires and has been influenced by both Western and Eastern cultures. Visitors can explore the iconic Hagia Sophia, which was once a church, then a mosque, and now a museum. The Topkapi Palace, the Blue Mosque, and the Grand Bazaar are also must-sees when in Istanbul."}`;
  } else if (city === "America/New_York") {
    cityInfoText.textContent = `${"Settled in 1624 and incorporated in 1898, New York City is the most populous city in the United States. As the center of the world, New York has a rich and diverse history, spanning from the earliest Dutch settlers and the Revolutionary War to the Statue of Liberty and the Sept. 11 terror attacks. But there are many intriguing, odd, and historical facts that some have forgotten or simply aren't aware of. Did you know some of the most popular parks once served as cemeteries for the indigent citizens of New York, and It used to be called New Amsterdam.? These and more comprise a tiny portion of the unique history that is the Big Apple."}`;
  } else if (city === "Europe/Paris") {
    cityInfoText.textContent = `${"Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Believe it or not though, Paris wasn’t always called Paris, and the Eiffel Tower wasn’t supposed to be a permanent fixture. Here are three interesting facts about Paris: 1.The Eiffel Tower was supposed to be a temporary installation, intended to stand for 20 years after being built for the 1889 World Fair. 2-Paris was originally a Roman City called “Lutetia.” 3-There are at least three replicas of the Statue of Liberty in Paris. The most famous of them exists on an island in the middle of the Seine and looks towards her sister statue in New York."}`;
  } else if (city === "Europe/Rome") {
    cityInfoText.textContent = `${"Known as ‘The Eternal City’ Rome is stepped in history, with a legacy that spans thousands of years. The ancient city was the center of the Roman Empire, and its architecture, art, and culture have influenced Western civilization for centuries. Visitors can explore iconic landmarks such as the Colosseum, the Roman Forum, and the Pantheon. When in Rome, don't forget to visit the Vatican City, the smallest country in the world and home to the famous Sistine Chapel."}`;
  } else if (city === "Australia/Sydney") {
    cityInfoText.textContent =
      "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.";
  } else if (city === "Asia/Tokyo") {
    cityInfoText.textContent =
      "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).";
  } else {
    // Handle unknown or default case
    cityInfoText.textContent = "City information not available.";
  }
}

function goBack() {
  // Show the cities container and hide the city info container
  document.querySelector(".cities-container").style.display = "flex";
  cityInfoContainer.style.display = "none";
}

// Call showCityInfo on city selection
citiesElement.addEventListener("change", function () {
  showCityInfo(citiesElement.value);
});

// Set up the "Go Back" button
goBackButton.addEventListener("click", goBack);

updateTime();
setInterval(updateTime, 1000);

// Call showSelectedCountry on page load
document.addEventListener("DOMContentLoaded", showSelectedCountry);

// Add an event listener for the city selection
citiesElement.addEventListener("change", showSelectedCountry);
