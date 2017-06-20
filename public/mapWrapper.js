var MapWrapper = function (location, coords, zoom) {

  var container = location;
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}




MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
      // info: infowindow.open(marker, coords);
    })






  },
  addClickEvent: function () {
    this.googleMap.addListener('click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(coords)

      // var contentString = '<div id="content">'+
      //  '<h1>hello</h1>'+
      //  '</div>'
      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // })
      //
      // infowindow.open(marker, coords);
      //
      // console.log(this);
    }.bind(this));
  }
}
