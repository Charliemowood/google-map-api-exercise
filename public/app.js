var initialize = function () {

  var location = document.querySelector('#main-map');

  var coords = {lat:52, lng:4}

  var zoom = 10;

  var mainMap = new MapWrapper(location, coords, zoom);

  mainMap.addMarker(coords);
  mainMap.addClickEvent();
}

window.addEventListener('load', initialize);
