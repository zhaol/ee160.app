function initialize() {
  
  if ($(coordinates).length > 0) {
    var lat = $(coordinates).first()[0].lat;
    var long = $(coordinates).first()[0].long;
  } else {
    var lat = 21.306944;
    var long = -157.858333;
  }
  var myLatlng = new google.maps.LatLng(lat, long);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  if ($(coordinates).length > 0) {
    $(coordinates).each(function() {
      var aLatLng = new google.maps.LatLng(this.lat, this.long);
      var marker = new google.maps.Marker({
        position: aLatLng,
        map: map,
        title: this.title
      });
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);