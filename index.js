const buttonElem = document.querySelector("#position-button");

const API_TOKEN =
  "pk.eyJ1Ijoiam9oYW5raXZpIiwiYSI6ImNrcnl6M25xMDA4aWUyd3BqY3EzYnA1NTEifQ.ve5rEn8ZDwUGKvphMkEdpw";

async function getLongLat(long, lat) {
  const res = await fetch(
    `https://api.resrobot.se/v2.1/location.nearbystops?format=json&accessId=6097562d-5f91-462b-b5e9-a941856f3fd4&originCoordLat=${lat}&originCoordLong=${long}`
  );
  const data = await res.json();

  const locationList = data.stopLocationOrCoordLocation.map((item) => {
    return item.StopLocation.name;
  });

  console.log(locationList);
}

buttonElem.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      getLongLat(pos.coords.longitude, pos.coords.latitude);
    });
  }
});
