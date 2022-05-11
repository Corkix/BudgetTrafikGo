const buttonElem = document.querySelector("#position-button");

function showOnMap(position) {
  mapboxgl.accessToken = process.env.MAP_API_TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [position.coords.longitude, position.coords.latitude],
    zoom: 13,
  });

  new mapboxgl.Marker()
    .setLngLat([position.coords.longitude, position.coords.latitude])
    .addTo(map);
}

buttonElem.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      showOnMap(pos);
    });
  }
});
