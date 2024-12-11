let map,marker;
const initMap=async()=>{
  const position = coordinate;
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: position,
  });

  marker = new google.maps.Marker({
    map: map,
    position: position,
    animation: google.maps.Animation.DROP,
    draggable: true,
    });
    marker.addListener("click", toggleBounce);
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

initMap();